import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { allBlogPosts, blogPosts } from "../data/blog.data";
import type { IBlogContentBlock } from "../types/blog.type";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/['''’]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const renderListItem = (item: string, idx: number) => {
  const parts = item.split(" — ");
  return (
    <li key={idx} className="text-sm text-slate-600 leading-relaxed">
      {parts.length > 1 ? (
        <>
          <strong className="text-slate-800">{parts[0]}</strong> — {parts.slice(1).join(" — ")}
        </>
      ) : (
        item
      )}
    </li>
  );
};

const ContentBlock = ({ block }: { block: IBlogContentBlock }) => {
  switch (block.type) {
    case "heading":
      return (
        <h2 id={slugify(block.text!)} className="text-2xl font-bold text-slate-900 mt-10 mb-4 scroll-mt-24">
          {block.text}
        </h2>
      );
    case "subheading":
      return (
        <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">{block.text}</h3>
      );
    case "paragraph":
      return (
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {block.text}
          {block.linkText && (
            <Link to={block.linkHref!} className="text-blue-600 font-medium hover:underline">
              {block.linkText}
            </Link>
          )}
          {block.textAfter}
        </p>
      );
    case "list":
      return (
        <ul className="list-disc pl-5 space-y-2 mb-4">
          {block.items!.map((item, i) => renderListItem(item, i))}
        </ul>
      );
    case "orderedList":
      return (
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          {block.items!.map((item, i) => renderListItem(item, i))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-blue-500 bg-slate-50 rounded-xl px-6 py-5 my-6">
          <p className="text-base text-slate-700 italic leading-relaxed mb-2">"{block.text}"</p>
          {block.quoteAuthor && (
            <p className="text-sm text-slate-500">— {block.quoteAuthor}</p>
          )}
        </blockquote>
      );
    default:
      return null;
  }
};

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = allBlogPosts.find((p) => p.id === id);

  const headings = (post?.content ?? [])
    .filter((b) => b.type === "heading")
    .map((b) => ({ text: b.text!, id: slugify(b.text!) }));

  const [activeId, setActiveId] = useState(headings[0]?.id);
  const [extraComments, setExtraComments] = useState<{ name: string; date: string; text: string; img: string }[]>([]);
  const [form, setForm] = useState({ name: "", email: "", text: "" });

  useEffect(() => {
    if (!headings.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [post?.id]);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Maqola topilmadi</h1>
        <Link to="/blog" className="text-blue-600 font-medium hover:underline">
          Blogga qaytish
        </Link>
      </div>
    );
  }

  const allComments = [...(post.comments ?? []), ...extraComments];
  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;
    setExtraComments((prev) => [
      ...prev,
      {
        name: form.name,
        img: "https://i.pravatar.cc/100?img=33",
        date: "Hozir",
        text: form.text,
      },
    ]);
    setForm({ name: "", email: "", text: "" });
  };

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-5">
          <Link to="/" className="hover:text-blue-600 transition">Bosh sahifa</Link>
          <span>›</span>
          <Link to="/blog" className="hover:text-blue-600 transition">Blog</Link>
          <span>›</span>
          <span className="text-slate-700 font-medium truncate max-w-[200px]">{post.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10">
          <div>
            {/* META */}
            <div className="flex items-center gap-3 text-sm text-slate-500 mb-4 flex-wrap">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${post.categoryColor}`}>
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
              {post.views && (
                <>
                  <span>·</span>
                  <span>{post.views}</span>
                </>
              )}
            </div>

            {/* TITLE */}
            <h1 className="text-3xl font-bold text-slate-900 leading-snug mb-5">{post.title}</h1>

            {/* AUTHOR + ACTIONS */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img src={post.authorImg} alt={post.author} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">{post.author}</p>
                  {post.authorRole && <p className="text-xs text-slate-500">{post.authorRole}</p>}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="h-9 w-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </button>
                <button className="h-9 w-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                    <line x1="8.6" y1="10.5" x2="15.4" y2="6.5" /><line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
                  </svg>
                </button>
              </div>
            </div>

            {/* HERO IMAGE */}
            <img src={post.img} alt={post.title} className="w-full h-80 object-cover rounded-2xl mb-8" />

            {/* CONTENT */}
            <div>
              {post.content ? (
                post.content.map((block, i) => <ContentBlock key={i} block={block} />)
              ) : (
                <p className="text-sm text-slate-500">Bu maqola matni tez kunda qo'shiladi.</p>
              )}
            </div>

            {/* TAGS */}
            {post.tags && (
              <div className="border-t border-slate-200 mt-10 pt-6 flex items-center gap-2 flex-wrap">
                <span className="text-sm text-slate-500 mr-1">Teglar:</span>
                {post.tags.map((tag) => (
                  <span key={tag.label} className={`text-xs font-medium px-3 py-1.5 rounded-lg ${tag.color}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            )}

            {/* SHARE */}
            <div className="border border-slate-200 rounded-2xl px-6 py-4 mt-6 flex items-center justify-between flex-wrap gap-3">
              <span className="text-sm font-medium text-slate-700">Maqolani ulashish:</span>
              <div className="flex gap-2">
                {["✈", "f", "🐦", "in", "⧉"].map((icon, i) => (
                  <span
                    key={i}
                    className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 text-xs hover:bg-slate-200 transition cursor-pointer"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>

            {/* COMMENTS */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-slate-900 mb-5">Izohlar ({allComments.length})</h2>

              <form onSubmit={handleSubmit} className="border border-slate-200 rounded-2xl p-5 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    placeholder="Ismingiz"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <textarea
                  placeholder="Izohingizni yozing..."
                  rows={3}
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3 resize-none"
                />
                <div className="flex justify-end">
                  <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                    Izoh qoldirish
                  </button>
                </div>
              </form>

              <div className="space-y-6">
                {allComments.map((c, i) => (
                  <div key={i} className="flex gap-3">
                    <img src={c.img} alt={c.name} className="h-10 w-10 rounded-full object-cover shrink-0" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-slate-800">{c.name}</span>
                        <span className="text-xs text-slate-400">{c.date}</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-1">{c.text}</p>
                      <button className="text-xs font-medium text-blue-600 hover:underline">Javob berish</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TOC SIDEBAR */}
          {headings.length > 0 && (
            <aside className="hidden lg:block">
              <div className="border border-slate-200 rounded-2xl p-5 sticky top-24">
                <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Tarkib</h3>
                <nav className="space-y-3">
                  {headings.map((h) => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      className={`block text-sm transition ${
                        activeId === h.id ? "text-blue-600 font-semibold" : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* RELATED */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">O'xshash maqolalar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/blog/${p.id}`}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition"
              >
                <img src={p.img} alt={p.title} className="h-40 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${p.categoryColor}`}>
                      {p.category}
                    </span>
                    <span className="text-xs text-slate-400">{p.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1 leading-snug">{p.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;