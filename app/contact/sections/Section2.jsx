import React, { useState, useRef } from 'react';
import axios from 'axios';
import './ContactSection_02.css';

export default function ContactModal({ onClose = () => {} }) {
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileClick = () => fileInputRef.current?.click();
  const handleFileChange = e => {
    const f = e.target.files[0];
    if (f) {
      setFile(f);
      setFileName(f.name);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!companyEmail) {
      alert('Company Email is required.');
      return;
    }
    if (sending) return;
    setSending(true);

    const formData = new FormData();
    formData.append('companyEmail', companyEmail);
    formData.append('companyName', companyName);
    formData.append('url', '');
    if (file) formData.append('attachment', file);
    formData.append('message', message);

    try {
      await axios.post(
        'https://port-0-ychat-lzgmwhc4d9883c97.sel4.cloudtype.app/send-email',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      alert('Your request has been sent!');
      window.location.href = 'https://yogico.kr';
    } catch (err) {
      console.error('전송 오류:', err);
      alert('Send failed: ' + (err.response?.data?.error || err.message));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-overlay">
      <div className="contact-modal" onClick={e => e.stopPropagation()}>
        {/* ─── 헤더 ─── */}
        <div className="contact-modal-header">
          <div className="logo-wrapper">
            <img
              src="https://yogibo.openhost.cafe24.com/yogico/img/icon/coMake.png"
              alt="Yogi Corporation"
            />
          </div>
        </div>

        {/* ─── 본문 ─── */}
        <div className="contact-modal-body">
          <h2 className="contact-title">Contact us</h2>
          <p className="contact-subtitle">
            We appreciate your interest in Yogi Corporation. To submit a question, please complete the form below.<br />
            Required fields are indicated with an asterisk (*).
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="columns">
              <div className="left">
                <input
                  className="styled-input"
                  type="text"
                  placeholder="Name *"
                  value={companyName}
                  onChange={e => setCompanyName(e.target.value)}
                  required
                />
                <input
                  className="styled-input"
                  type="email"
                  placeholder="E-Mail *"
                  value={companyEmail}
                  onChange={e => setCompanyEmail(e.target.value)}
                  required
                />
                <div className="file-input-wrapper">
                  <input
                    className="file-display-input"
                    readOnly
                    placeholder="Attach a file"
                    value={fileName}
                    onClick={handleFileClick}
                  />
                  <button
                    type="button"
                    className="search-button"
                    onClick={handleFileClick}
                  >
                    Choose File
                  </button>
                  <input
                    className="hidden-file-input"
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div className="right">
                <textarea
                  className="styled-textarea"
                  placeholder="Message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="send-button"
              disabled={sending}
            >
              {sending ? 'SENDING...' : 'Submit'}
            </button>
          </form>

          {/* ─── 하단 개인정보 안내 ─── */}
          <div className="contact-footer">
            <p>
              Yogi Corporation is committed to protecting your personal information.
            </p>
            <p>
              The information you provide will be securely managed in accordance with applicable laws and our privacy policy,<br/> and will be used solely for the purpose of responding to your inquiry and improving our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
