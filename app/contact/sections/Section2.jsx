// src/components/ContactModal.js
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './ContactSection_02.css'; // 경로는 구조에 맞게 조정

export default function ContactModal({ onClose = () => {} }) {
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileClick = () => fileInputRef.current.click();
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

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="contact-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={e => e.stopPropagation()}>
        <button
          aria-label="Close contact modal"
          className="close-button"
          onClick={onClose}
        >
          &times;
        </button>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="columns">
            <div className="left">
              <input
                className="styled-input"
                type="email"
                placeholder="Company Email *"
                value={companyEmail}
                onChange={e => setCompanyEmail(e.target.value)}
                required
              />
              <input
                className="styled-input"
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
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
                placeholder="Describe your collaboration request"
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
            {sending ? 'SENDING...' : 'SEND'}
          </button>
        </form>


      </div>
    </div>
  );
}
