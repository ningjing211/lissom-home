'use client';

import { useEffect } from 'react';
import '@/app/ui/core_value/parallax.css';

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
            {/* <h3>Ever Changing</h3> */}
            <h1 style={{textAlign: 'center'}}>服務項目</h1>
          </div>
        </section>
        <section  id="origin">
          <div className="parallax-core_value-one animate-fadeInUp">
            <h2>傾聽想像</h2>
          </div>
        </section>
        
        <section className="section-words">
          <div id="story" className="block">
            <p>我們理解，空間的成形從來不是單一決策，而是一場協作。設計不只需要創意，更需要在現實條件中找到可行的路徑。從風格脈絡到產品整合、從材質掌握到預算拿捏，我們將設計端的語言，轉譯為精準落地的選品與執行配合。讓空間概念被具象化的選配策略與軟裝顧問角色。無論是什麼樣的空間，都能在質感、比例與時間進程中，被確實完成。</p>
          </div>
        </section>
        
        <section className="new-order-process-area section-words">
          <div className="">
            <div className="process-title-container">
              <div className="process-subtitle">訂製軟裝傢俱流程 Procedure</div>
            </div>
            
            <div className="process-steps-container">
              <div className="step-item">
                <div className="step-header">
                  <span className="step-number">STEP 1</span>
                  <span className="step-divider">｜</span>
                  <div className="step-title">初步討論</div>
                </div>
                <div className="step-description">
                  <div>進行初步討論了解空間佈局、風格及居住者喜好</div>
                  <div>建議提供平面圖、情境照、3D風格方向</div>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-header">
                  <span className="step-number">STEP 2</span>
                  <span className="step-divider">｜</span>
                  <div className="step-title">配置提案討論</div>
                </div>
                <div className="step-description">
                  <div>彙整需求提出配置提案</div>
                  <div>透過簡報展示陳列位置及款式細節，協助確認的品項並進行材質挑選</div>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-header">
                  <span className="step-number">STEP 3</span>
                  <span className="step-divider">｜</span>
                  <div className="step-title">報價與簽訂</div>  
                </div>
                <div className="step-description">
                  <div>確定最終方案</div>
                  <div>按照確認的品項及尺寸材質提供報價並進行簽約</div>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-header">
                  <span className="step-number">STEP 4</span>
                  <span className="step-divider">｜</span>
                  <div className="step-title">尺寸丈量</div>
                </div>
                <div className="step-description">
                  <div>在簽訂確認後，我們將至現場進行精確丈量</div>
                  <div>確保傢俱擺放位置、尺寸與動線無誤</div>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-header">
                  <span className="step-number">STEP 5</span>
                  <span className="step-divider">｜</span>
                  <div className="step-title">下單製作</div>
                </div>
                <div className="step-description">
                  <div>與匠工確認所有細節，施工圖面核對把關</div>
                  <div>製作工期約4-6週</div>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-header">
                  <span className="step-number">STEP 6</span>
                  <span className="step-divider">｜</span>
                  <div className="step-title">時程品質把控</div>
                </div>
                <div className="step-description">
                  <div>製作過程品質監控</div>
                  <div>為客製細節與進度進行把控</div>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-header">
                  <span className="step-number">STEP 7</span>
                  <span className="step-divider">｜</span>
                  <div className="step-title">完成交付</div>
                </div>
                <div className="step-description">
                  <div>安排專業司機送至現場</div>
                  <div>家具進行組裝定位，驗貨點交，完成交付</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section  >
        <div className="parallax-core_value-three animate-zoomIn">
            <h2>實現藍圖</h2>
          </div>
        </section>

        <section className="section-words">
          <div className="block">
            
            <p>我們相信，精準的決策，來自嚴謹的系統。我們引進 Scrum、Kanban、Lean 等高效管理思維，確保每個環節都被優化，讓「美」與「效率」不再是對立，而是共存的力量。我們將工作流打磨至最順暢，減少無謂的繁瑣過程，讓時間真正流向更高層次的創造——讓細節更精緻，讓工藝更純熟，讓材料更珍貴。這不只是為了提升生產效率，而是為了讓節省下來的時間，能夠回饋給更多需要的人。家具的存在，應該是溫暖而實用的，不是因為稀有而昂貴，而是因為它真正解決了人的需求，讓每一位選擇我們的人，都能擁有高品質、可負擔的生活之美。</p>

          </div>

          

        </section> */}

        {/* <section>
        <div className="parallax-core_value-four animate-zoomOut">
            <h2>客戶體驗</h2>
          </div>
        </section>

        <section className="section-words">
          <div className="block">
          
            <p>我們的家具，來自世界，也回應世界。我們學習佛教的智慧，學會「聆聽」，而非「強加」。我們不製造多餘的物品，而是理解人們真正的需求，打造能夠陪伴人一生的存在。每一件家具，都承載著選擇它的人的故事，因此，我們珍惜每一次的相遇，讓每個細節都滿足最真實的渴望。我們不追求盲目的市場潮流，而是尊重生活本質，讓家回歸家的意義。當一張椅子、一張桌子不只是物件，而是日常的陪伴者，它才擁有真正的價值。</p>

          </div>

          

        </section> */}

      </div>
    );
  }