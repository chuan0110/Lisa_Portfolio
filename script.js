document.addEventListener('DOMContentLoaded', () => {
    const portfolioData = {
        art: {
            title: '大學期間參與過的藝術作品',
            caption: '這系列作品匯集了從校園創作到競賽參與的精華，透過多元的媒材與意象，探索傳統文化與現代生活之間的交會點，並試圖在鏡映與轉折中，點亮屬於心靈的獨特星語。',
            details: [
                '透過分割畫面的構圖，展示了在地傳統服飾之美。以「點亮心中的燈，點亮希望就出發」為註解，寓意文化的傳承如花綻放，是引領前行的明燈。',
                '運用細膩的筆觸與圓形構圖，構築出一個夢幻的空間。畫面中交織的線條與人物，象徵在人生的轉折點上，個體與宇宙、夢想間的細微連結。',
                '以抽象的拼貼感與攀登意象，呈現「尋根」過程的艱辛與堅持。鮮明的對比色強化了目標與方向，人物的點綴使作品富有敘事感。',
                '巧妙運用對稱結構與反轉文字，探討文化認同與「鏡映」的關係。這件作品富有實驗性，透過視覺上的衝突與平衡，深刻挖掘語言與自我的內在關聯。',
                '兩件圓形媒材作品，以強烈的色彩渲染與質感觸碰，體現了自然與靈魂的律動。「靈」與「夢」的意象在金屬質感與鮮明色彩中燃燒與流動。',
                '以幾何構圖結合吉他造型，象徵音樂人生中的不同碎片與拼湊。色彩大膽且鮮明，傳達了藝術家對音樂生活的熱情與多元面貌。',
                '極具細節的黑白線稿，展現了複雜的傳統編織紋路與圖騰。這是一幅對於傳統文化的細緻刻畫，將圖騰符號轉化為現代線條，體現了對根源的致敬。'
            ],
            imageTitles: [
                '台灣花',
                '轉折中的星語',
                '尋根',
                '鏡映 Makapahay',
                '靈歌．地息／夢歌．燃光',
                'Guitar Puzzle',
                '情人袋'
            ],
            images: [
                'images/portfolio/art/台灣花.png',
                'images/portfolio/art/轉折中的星語.jpg',
                'images/portfolio/art/尋根.jpg',
                'images/portfolio/art/鏡映 Makapahay.jpg',
                'images/portfolio/art/靈歌地息 夢歌燃光.jpg',
                'images/portfolio/art/guitar_puzzle.jpg',
                'images/portfolio/art/情人袋.png'
            ]
        },
        cultural: {
            title: '元智大學原住民族青年社活動',
            caption: '活動紀錄、文化推廣與社團形象照片。',
            details: '我加入了原青社起初因為熱情我擔任了不同的角色，因為我是我們學弟們這屆唯一的幹部，而我擔任的職位是總務，但我還是學習了美宣的海報設計、公關的主持、講師的邀請、總務的社團經費管理與核銷，這些事情都由我包辦也沒問題，而因為自己的熱心參與下一屆也擔任了原青社社長，也邀請了10幾位學弟妹們跟我們一起玩社團，把這屆的原青社帶了起來。',
            imageTitles: [
                '原民週活動結束後的紀錄照',
                '元智大學原住民族青年社初始社團幹部大合照',
                '新一代原青社與原資中心大合照',
                '原民週<<癒合>>表演',
                '原民週<<癒合>>表演',
                '元智大學原住民族青年社與健行科大原青社族服宣傳照',
                '元智大學原住民族青年社與健行科大原青社族服宣傳照',
                '元智大學原住民族青年社族服宣傳照',
                '元智大學原住民族青年社族服宣傳照',
                'Kamis團照',
                'Kamis團照'
            ],
            images: [
                'images/portfolio/cultural/社課結束.JPEG',
                'images/portfolio/cultural/原青社合照.JPG',
                'images/portfolio/cultural/原資中心.JPEG',
                'images/portfolio/cultural/原民週_1.jpg',
                'images/portfolio/cultural/原民週_2.jpg',
                'images/portfolio/cultural/原青社族服宣傳照.jpg',
                'images/portfolio/cultural/原青社族服宣傳照2.jpg',
                'images/portfolio/cultural/原青社族服宣傳照3.jpg',
                'images/portfolio/cultural/原青社族服宣傳照4.jpg',
                'images/portfolio/cultural/雙人合照_1.jpg',
                'images/portfolio/cultural/雙人合照_2.jpg'
            ]
        },
        curator: {
            title: '小導演與學藝員經驗',
            caption: '策展、導覽、展場與學習型活動的紀錄。',
            details: [
                '〈Makapahay〉：身為原住民的我，與阿姨以及夥伴們一同訪問部隊的長老們。',
                '學藝員第五屆畢業典禮',
                '學藝員工作照',
                '學藝員畢業照，與媽媽的合影',
                '學藝員畢業照，與長官的合影',
                '我帶的小朋友們和給我們住宿的阿嬤好可愛',
                '情人袋培訓工作坊紀錄，謝謝樂丞文創工作室。',
                '馬幼藝所合作照片：場域合作與活動成果展示。'
            ],
            imageTitles: [
                'Makapahay',
                '學藝員畢業照',
                '學藝員學習合照 ',
                '學藝員畢業照',
                '學藝員畢業照',
                '小導演合照',
                '情人袋培訓工作坊',
                '馬幼藝所打工經驗'
            ],
            images: [
                'images/portfolio/curator/Makapahay.JPG',
                'images/portfolio/curator/學藝員1.JPG',
                'images/portfolio/curator/學藝員2.JPG',
                'images/portfolio/curator/學藝員3.jpg',
                'images/portfolio/curator/學藝員4.jpg',
                'images/portfolio/curator/小導演.jpg',
                'images/portfolio/curator/情人袋培訓.JPG',
                'images/portfolio/curator/馬幼藝所.JPG'
            ]
        },
        latern_festival: {
            title: '2025 桃園燈會經驗',
            caption: '燈會專案參與與現場記錄。',
            details: [
                '燈會新聞稿截圖，說明概念與協作單位。',
                '作品內部細節照，展示燈體結構與材質處理。',
                '作品外觀拍攝，這不是曬衣架喔。',
                '燈會草圖與設計草案。'
            ],
            imageTitles: [
                '2025 桃園燈會 <<城市聚光燈>>新聞稿',
                '作品內部',
                '作品外觀',
                '作品草圖'
            ],
            images: [
                'images/portfolio/latern_festival/news.PNG',
                'images/portfolio/latern_festival/作品內部.jpg',
                'images/portfolio/latern_festival/作品外觀.jpg',
                'images/portfolio/latern_festival/作品草圖.JPG'
            ]
        },
        performance: {
            title: '街頭表演、演戲與 MV 經驗',
            caption: '表演、舞台與影音作品整理。',
            details:
                '只要在大眾視野前，我就有滿滿的活力喔！',
            imageTitles: [
                '演戲場景照 1',
                '演戲場景照 2',
                '表演紀錄 1',
                '表演紀錄 10',
                '表演紀錄 11',
                '表演紀錄 2',
                '表演紀錄 3',
                '表演紀錄 4',
                '表演紀錄 5',
                '表演紀錄 6',
                '表演紀錄 7',
                '表演紀錄 8',
                '表演紀錄 9',
                '錄音房花絮',
                '錄歌現場照片'
            ],
            images: [
                'images/portfolio/performance/演戲1.jpg',
                'images/portfolio/performance/演戲2.jpg',
                'images/portfolio/performance/表演1.JPEG',
                'images/portfolio/performance/表演10.JPG',
                'images/portfolio/performance/表演11.JPG',
                'images/portfolio/performance/表演2.JPEG',
                'images/portfolio/performance/表演3.JPEG',
                'images/portfolio/performance/表演4.jpg',
                'images/portfolio/performance/表演5.JPG',
                'images/portfolio/performance/表演6.JPG',
                'images/portfolio/performance/表演7.jpg',
                'images/portfolio/performance/表演8.JPG',
                'images/portfolio/performance/表演9.JPG',
                'images/portfolio/performance/錄歌1.jpg',
                'images/portfolio/performance/錄歌2.PNG'
            ]
        },
        phone_strap: {
            title: '手作品牌「即編」',
            caption: '編織手機吊繩與品牌商品。',
            details: '自己親手設計從品牌、繩子材質、顏色到包裝，甚至是行銷文案都由我一手包辦，從無到有的創業過程讓我學習了很多，也讓我對於品牌經營有了更深的理解與體會。',
            imageTitles: [
                '即編品牌識別',
                '成品展示',
                '成品展示',
                '成品展示',
                '成品展示',
                '成品展示',
                '成品展示'
            ],
            images: [
                'images/portfolio/phone_strap/即編手作.png',
                'images/portfolio/phone_strap/IMG_5649_2.jpg',
                'images/portfolio/phone_strap/IMG_5645_2.jpg',
                'images/portfolio/phone_strap/IMG_5642_2.jpg',
                'images/portfolio/phone_strap/IMG_5641_2.jpg',
                'images/portfolio/phone_strap/IMG_5639_2.jpg',
                'images/portfolio/phone_strap/IMG_5635_2.jpg'
            ]
        },
        poster: {
            title: '原青社原民週海報主視覺',
            caption: '主視覺與延伸海報系列。',
            details: '以大地的顏色當作背景展現對土地的尊重，加入小米、馬告、百步蛇等各族文化元素融入現代排版，作為活動識別。',
            imageTitles: [
                '原民週主視覺 1',
                '原民週主視覺 2',
                '原民週主視覺 3',
                '原民週主視覺 4',
                '原民週主視覺 5',
                '原民週主視覺 6',
                '原民週主視覺 7',
                '原民週主視覺 8'
            ],
            images: [
                'images/portfolio/poster/1.png',
                'images/portfolio/poster/16.png',
                'images/portfolio/poster/17.png',
                'images/portfolio/poster/2.png',
                'images/portfolio/poster/21.png',
                'images/portfolio/poster/3.png',
                'images/portfolio/poster/4.png',
                'images/portfolio/poster/6.png'
            ]
        }
    };

    // 未來新增圖片時，請直接到對應分類的 images 陣列中加入新的相對路徑。
    // 例如：art.images.push('images/portfolio/art/new-work.jpg')。

    const navToggle = document.getElementById('nav-toggle');
    const siteNav = document.getElementById('site-nav');

    if (navToggle && siteNav) {
        navToggle.addEventListener('click', () => {
            const isOpen = siteNav.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        siteNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                siteNav.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const revealTargets = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    revealTargets.forEach((target) => revealObserver.observe(target));

    document.querySelectorAll('[data-portfolio-key]').forEach((card) => {
        const key = card.dataset.portfolioKey;
        const data = portfolioData[key];
        const swiperRoot = card.querySelector('.portfolio-swiper');
        const wrapper = card.querySelector('.swiper-wrapper');
        const title = card.querySelector('.portfolio-card__meta h3');
        const caption = card.querySelector('.portfolio-card__meta p');

        if (!data || !swiperRoot || !wrapper) {
            return;
        }

        if (title) {
            title.textContent = data.title;
        }

        if (caption) {
            caption.textContent = data.caption;
        }

        wrapper.innerHTML = data.images.map((src, index) => {
            const imageTitle = (data.imageTitles && data.imageTitles[index]) || `${data.title} 圖片 ${index + 1}`;

            return `
            <div class="swiper-slide portfolio-slide">
                <div class="portfolio-media">
                    <img src="${src}" alt="${imageTitle}" loading="lazy" data-portfolio-key="${key}" data-portfolio-index="${index}">
                </div>
                <div class="portfolio-caption">${imageTitle}</div>
            </div>
        `;
        }).join('');

        new Swiper(swiperRoot, {
            slidesPerView: 1,
            spaceBetween: 16,
            speed: 650,
            loop: data.images.length > 1,
            watchOverflow: true,
            autoplay: data.images.length > 1 ? {
                delay: 2600,
                disableOnInteraction: false
            } : false,
            pagination: {
                el: card.querySelector('.swiper-pagination'),
                clickable: true
            },
            navigation: {
                nextEl: card.querySelector('.swiper-button-next'),
                prevEl: card.querySelector('.swiper-button-prev')
            }
        });
    
    // Lightbox / modal handling (點擊圖片後開啟)
    const lightbox = document.getElementById('lightbox');
    const lbImage = document.getElementById('lightbox-image');
    const lbTitle = document.getElementById('lightbox-title');
    const lbCaption = document.getElementById('lightbox-caption');
    const lbDetail = document.getElementById('lightbox-detail');
    const lbClose = document.getElementById('lightbox-close');

    function getPortfolioDetail(item, index) {
        if (typeof item.details === 'string') {
            return item.details;
        }

        if (Array.isArray(item.details)) {
            return item.details[index] || '';
        }

        return '';
    }

    function openLightbox(key, index) {
        const item = portfolioData[key];
        if (!item) return;
        lbImage.src = item.images[index] || '';
        lbImage.alt = `${item.title} 圖片 ${index + 1}`;
        lbTitle.textContent = (item.imageTitles && item.imageTitles[index]) || item.title;
        lbCaption.textContent = '';
        lbCaption.hidden = true;
        const detailText = getPortfolioDetail(item, index);
        if (detailText) {
            lbDetail.innerHTML = detailText;
            lbDetail.hidden = false;
        } else {
            lbDetail.innerHTML = '';
            lbDetail.hidden = true;
        }
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        lbImage.src = '';
        lbCaption.hidden = false;
        document.body.style.overflow = '';
    }

    // 事件代理：監聽整個文件的點擊，辨識是否點到作品圖片或遮罩關閉
    document.body.addEventListener('click', (e) => {
        const img = e.target.closest('.portfolio-media img');
        if (img) {
            const key = img.dataset.portfolioKey;
            const idx = Number(img.dataset.portfolioIndex);
            openLightbox(key, idx);
            return;
        }

        if (e.target.matches('[data-action="close"]') || e.target === lbClose) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox && lightbox.classList.contains('is-open')) {
            closeLightbox();
        }
    });
    });
});