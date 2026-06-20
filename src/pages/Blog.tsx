import { Link } from "react-router-dom";
import { Pagination } from "../components/courses";
import {
  blogCategories,
  featuredPost,
  blogPosts,
  popularPosts,
  popularTags,
} from "../data/blog.data";

const Blog = () => {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#EEF2FF] px-6 py-14 text-center">
        <div className="mb-4 flex items-center justify-center gap-2 text-sm text-slate-500">
          <Link to="/" className="hover:text-blue-600 transition">Bosh sahifa</Link>
          <span>›</span>
          <span className="font-medium text-blue-600">Blog</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          Foydali maqolalar va yangiliklar
        </h1>
        <p className="text-slate-500 text-sm">
          IT, dasturlash, dizayn va karyera bo'yicha eng dolzarb materiallar.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">

        {/* FEATURED POST */}
        <Link
          to={`/blog/${featuredPost.id}`}
          className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-12 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition"
        >
          <img
            src={featuredPost.img}
            alt={featuredPost.title}
            className="h-64 md:h-full w-full object-cover"
          />
          <div className="p-8 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">
              Tanlangan · 2026-yil eng yaxshi maqola
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
              {featuredPost.title}
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <img src={featuredPost.authorImg} alt={featuredPost.author} className="h-7 w-7 rounded-full" />
              <span className="font-medium text-slate-700">{featuredPost.author}</span>
              <span>·</span>
              <span>{featuredPost.date}</span>
              <span>·</span>
              <span>{featuredPost.readTime}</span>
            </div>
          </div>
        </Link>

        {/* MAIN GRID + SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">

          {/* POSTS GRID */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition flex flex-col"
                >
                  <Link to={`/blog/${post.id}`}>
                    <img src={post.img} alt={post.title} className="h-44 w-full object-cover" />
                  </Link>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${post.categoryColor}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-400">{post.date}</span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <h3 className="font-bold text-slate-900 mb-2 leading-snug hover:text-blue-600 transition">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <img src={post.authorImg} alt={post.author} className="h-6 w-6 rounded-full" />
                        <span className="text-sm text-slate-600">{post.author}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        O'qish
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <Pagination totalPages={7} />
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">

            {/* CATEGORIES */}
            <div className="border border-slate-200 rounded-2xl p-5">
              <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">
                Kategoriyalar
              </h3>
              <div className="space-y-3">
                {blogCategories.map((cat) => (
                  <div
                    key={cat.label}
                    className="flex items-center justify-between text-sm py-1 cursor-pointer hover:text-blue-600 transition"
                  >
                    <span className="text-slate-700">{cat.label}</span>
                    <span className="text-slate-400">{cat.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* POPULAR POSTS */}
            <div className="border border-slate-200 rounded-2xl p-5">
              <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">
                Mashhur maqolalar
              </h3>
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <div key={post.title} className="flex gap-3 cursor-pointer group">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="h-12 w-12 rounded-lg object-cover shrink-0"
                    />
                    <div>
                      <p className="text-sm font-medium text-slate-800 leading-snug group-hover:text-blue-600 transition">
                        {post.title}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">{post.views}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TAGS */}
            <div className="border border-slate-200 rounded-2xl p-5">
              <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">
                Mashhur teglar
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`text-xs font-medium px-3 py-1.5 rounded-lg cursor-pointer ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </section>
    </div>
  );
};

export default Blog;
