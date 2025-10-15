'use client';

import React, { useState, useRef, useContext } from 'react';
import axios from 'axios';
import { LanguageContext } from '@/contexts/LanguageContext';
import './ContactSection_02.css';

export default function ContactModal({ onClose = () => {} }) {
  const { lang } = useContext(LanguageContext);

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
      alert(lang === 'en'
        ? 'Company Email is required.'
        : '회사 이메일은 필수 입력 항목입니다.');
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
      alert(lang === 'en'
        ? 'Your request has been sent!'
        : '요청이 성공적으로 전송되었습니다!');
      window.location.href = 'https://yogico.kr';
    } catch (err) {
      console.error('전송 오류:', err);
      alert(lang === 'en'
        ? 'Send failed: ' + (err.response?.data?.error || err.message)
        : '전송 실패: ' + (err.response?.data?.error || err.message));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="contact-modal-header">
          <div className="logo-wrapper">
            <img
              src="/img/coMake2.png"
              alt="Yogi Corporation"
            />
          </div>
        </div>

        {/* Body */}
        <div className="contact-modal-body">
          <p className="contact-subtitle">
            {lang === 'en'
              ? 'Thank you for your interest in Yogi Corporation. Please complete the form below to submit your inquiry.'
              : '요기 코퍼레이션에 관심을 가져주셔서 감사합니다. 아래 양식을 작성하여 문의를 제출해 주세요.'}
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="columns">
              <div className="left">
                <input
                  className="styled-input"
                  type="text"
                  placeholder={lang === 'en' ? 'Name *' : '이름 *'}
                  value={companyName}
                  onChange={e => setCompanyName(e.target.value)}
                  required
                />
                <input
                  className="styled-input"
                  type="email"
                  placeholder={lang === 'en' ? 'E-Mail *' : '이메일 *'}
                  value={companyEmail}
                  onChange={e => setCompanyEmail(e.target.value)}
                  required
                />
                <div className="file-input-wrapper">
                  <input
                    className="file-display-input"
                    readOnly
                    placeholder={lang === 'en' ? 'Attach a file' : '파일 첨부'}
                    value={fileName}
                    onClick={handleFileClick}
                  />
                  <button
                    type="button"
                    className="search-button"
                    onClick={handleFileClick}
                  >
                    {lang === 'en' ? 'Choose File' : '파일 선택'}
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
                  placeholder={lang === 'en' ? 'Message' : '메시지'}
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
              {sending
                ? (lang === 'en' ? 'SENDING...' : '전송 중...')
                : (lang === 'en' ? 'Submit' : '제출')}
            </button>
          </form>

          {/* Footer */}
          <div className="contact-footer">
            <p>
              {lang === 'en'
                ? 'Yogi Corporation is committed to protecting your personal information. The information you provide will be securely managed in accordance with applicable laws and our privacy policy, and will be used solely for the purpose of responding to your inquiry and improving our services.'
                : '요기 코퍼레이션은 귀하의 개인정보 보호를 약속드립니다. 제공하신 정보는 관련 법령 및 개인정보 처리방침에 따라 안전하게 관리되며, 문의 응대 및 서비스 개선 목적에만 사용됩니다.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
