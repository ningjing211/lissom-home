'use client';

import '@/app/ui/philosophy/parallax.css';
import React from 'react';
import { useEffect } from 'react';

export default function Parallax() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-fadeInUp, .animate-slideInLeft, .animate-zoomIn, .animate-zoomOut');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.3 });
  
    elements.forEach(el => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);

  return (
    <div id="parallax-world-of-ugg">
      <section>
        <div id="brand" className="title" style={{marginTop: '70px'}}>
          <h1 style={{textAlign: 'center'}}>生活即藝術，空間即收藏</h1>
        </div>
      </section>
      
      <section id="origin">
        <div className="parallax-philosophy-one animate-fadeInUp">
          <h2>Art</h2>
        </div>
      </section>
      
      <section className="section-words">
        <div id="story" className="block">
          <p>
            在 LISSOM CASA，我們相信，美，不該被封存在展櫃裡，而應活在日常的選擇中。每一張椅子的曲線、每一盞燈光的角度、每一處材質的觸感，
            都是你對生活的詮釋，是日常美學的即興創作。
            我們將空間視為時間的容器。當生活在其中流動，空間便不只是場域，
            而是一場靜默的展演——收藏的不只是物件，更是記憶、溫度與關係。<br/><br/>

            你選擇的，不只是一件家具，而是一種對自我風格的誠實。一張桌子，記錄了你與家人的聚餐與爭執；
            一張沙發，乘載了無數沉默的安慰與陪伴。這些片段，沒有標價，卻最無價。<br/><br/>

            我們相信，真正動人的空間，並非來自設計的誇張，而是來自對生活的溫柔理解。家具不是點綴，而是對於「怎麼生活」這個問題，最有質地的回答。
            因此，我們不僅於販售商品，我們想邀請你——參與一場有靈魂的佈置，去創造屬於你的生活風格與情感場景。讓美學回到日常，讓選物成為一種對自我的照顧與辨識。

            這裡，不只是家具店。這裡是一個關於品味、選擇與生活態度的據點。LISSOM CASA，為你的未來居所，提供新的美學標準。
            <br/><br/>
            讓生活成為你的創作，讓空間成為你的藏品。
          </p>
        </div>
      </section>
      
      <section>
        <div className="parallax-philosophy-two animate-slideInLeft">
          <h2>Space</h2>
        </div>
      </section>

      <section className="section-words">
        <div className="block">
          <p>空間選擇的三個維度｜溫度、誠實、美感</p><br/><br/>
          <p>空間溫度<br/><br/>好的空間，不只是好看，而是能讓人「住得進去，捨不得離開」。我們重視材料的觸感、光影的流動、與使用者之間的互動，讓家具真正成為居所的延伸，而非擺設。
          <br/><br/>精緻選品<br/><br/>LISSOM CASA 的選品橫跨台灣本地精工廠、義大利百年工坊，亦涵蓋部分來自中國與東南亞的優質製造夥伴——我們相信，工藝的價值不僅僅於產地，而在於每一處細節是否足夠誠實與動人。
無論是義式皮革沙發、手工實木餐桌，還是來自新興製造基地的精緻單椅，每一項選品都必須通過我們內部「空間呈現 × 風格延展 × 使用者體驗」的三重檢視。對我們而言，選品不只是商品陳列，更是品牌與客戶之間對品味與品質的承諾。
          <br/><br/>藝術氛圍<br/><br/>我們融合藝廊策展邏輯於展示空間，讓家具與藝術共存，讓材質與線條對話，讓日常使用的物件也能成為沉浸感體驗的一部分。我們相信，美學應該是自然流動的，而非高高在上的。</p>
        </div>
      </section>

      <section>
        <div className="parallax-philosophy-three animate-zoomIn">
          <h2>Living</h2>
        </div>
      </section>

      <section className="section-words">
        <div className="block">
          <p>一件好家具不只是擺設，而是經典的參與者。源自北歐的極簡美學，日本的精工細作，德國的嚴謹結構，純淨原材共同構築我們對品質的承諾。我們選擇可持續木材，堅持環保塗裝，讓每一件作品皆能在歲月流轉間，依舊維持最純粹的狀態。信念，體現在每一次觸摸的溫潤，每一道工藝的細膩，每一次坐下的安心。我們不只製造家具，我們打造傳承與信任。</p>
        </div>
      </section>

      <section>
        <div className="parallax-philosophy-four animate-zoomOut">
          <h2>Collection</h2>
        </div>
      </section>

      <section className="section-words">
        <div className="block">
          <p>那一座被晨霧輕撫的山谷，芬芳的空氣透過細膩的蕾絲窗紗滑入，木質調的空間沉穩如調香師手中的琥珀，萬千層層交疊，世界柔和卻不失個性。編織的藤草椅，一針一線，三敲四打，嘎吱嚓啦手工流蘇，在光影流轉間展現靈動韻律，每一隻昆蟲路過的原木，如嫩芽般隨匠人的靈魂長出每一道紋理，哪怕是曾經為時間流連的光影，生活，一場無需妥協的藝術，我們以設計賦予室內靈魂，讓每一件個體都如精靈般，為您的空間舞出獨一無二的交響。</p>
        </div>
      </section>
    </div>
  );
} 