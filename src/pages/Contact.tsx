import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "Kurs haqida ma'lumot",
    message: "",
    agree: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-breadcrumb">
          <span>Bosh sahifa</span>
          <span className="sep">›</span>
          <span className="crumb-active">Aloqa</span>
        </div>
        <h1>Biz bilan bog'laning</h1>
        <p>Savollaringiz bormi? Bepul konsultatsiya olishni xohlaysizmi? Bizga yozing — javob beramiz.</p>
      </section>

      {/* MAIN */}
      <section className="contact-main">
        <div className="contact-container">

          {/* LEFT — FORM CARD */}
          <div className="contact-form-card">
            <div className="form-header">
              <h2>Xabar yuborish</h2>
              <p>24 soat ichida javob beramiz.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Ism <span className="req">*</span></label>
                  <input name="firstName" placeholder="Aziz" value={form.firstName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Familiya</label>
                  <input name="lastName" placeholder="Karimov" value={form.lastName} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email <span className="req">*</span></label>
                  <input name="email" type="email" placeholder="aziz@example.uz" value={form.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Telefon</label>
                  <input name="phone" placeholder="+998 90 123 45 67" value={form.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label>Mavzu</label>
                <select name="subject" value={form.subject} onChange={handleChange}>
                  <option>Kurs haqida ma'lumot</option>
                  <option>Texnik yordam</option>
                  <option>Boshqa</option>
                </select>
              </div>

              <div className="form-group">
                <label>Xabar <span className="req">*</span></label>
                <textarea
                  name="message"
                  placeholder="Xabaringizni shu yerda yozing..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                />
                <span className="form-hint">Iltimos, savolingizni iloji boricha aniq yozing.</span>
              </div>

              <label className="checkbox-label">
                <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
                <span>Foydalanish shartlari va shaxsiy ma'lumotlarni qayta ishlashga roziman.</span>
              </label>

              <div className="form-submit">
                <button type="submit" className="submit-btn">
                  Xabarni yuborish
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22,2 15,22 11,13 2,9"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN */}
          <div className="contact-right">

            {/* INFO CARD */}
            <div className="contact-info-card">
              <p className="info-card-title">BOG'LANISH MA'LUMOTLARI</p>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-text">
                  <span className="info-label">Manzil</span>
                  <span className="info-value">Amir Temur ko'chasi 108-uy, Toshkent, O'zbekiston</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-text">
                  <span className="info-label">Telefon</span>
                  <span className="info-value">+998 71 123 45 67</span>
                  <span className="info-value">+998 90 123 45 67</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-text">
                  <span className="info-label">Email</span>
                  <span className="info-value">info@oquv.uz</span>
                  <span className="info-value">support@oquv.uz</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div className="info-text">
                  <span className="info-label">Ish vaqti</span>
                  <span className="info-value">Du-Ju: 09:00 — 19:00</span>
                  <span className="info-value">Sha: 10:00 — 16:00</span>
                  <span className="info-value">Yakshanba: dam olish kuni</span>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="contact-map">
              <img src="/map.png" alt="Manzil xaritasi" />
            </div>

            {/* SOCIAL */}
            <div className="contact-social">
              <span>Ijtimoiy<br/>tarmoqlarda</span>
              <div className="social-icons">
                <a href="#" className="social-icon">✈</a>
                <a href="#" className="social-icon">📷</a>
                <a href="#" className="social-icon">f</a>
                <a href="#" className="social-icon">▶</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
