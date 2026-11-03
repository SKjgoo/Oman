/* معرض صور الوجهات. يُملأ تلقائيًا بالأداة tools/sort_photos.py
   الشكل: 'id-الوجهة': [ { src: 'images/gallery/<id>/1.jpg', cap: 'وصف اختياري' } ] */
const GALLERY = {
  "nakhal-fort": [
    {
      "src": "images/gallery/nakhal-fort/1.jpg",
      "cap": "قلعة نخل: برج دائري فوق صخرة طبيعية"
    },
    {
      "src": "images/gallery/nakhal-fort/2.jpg",
      "cap": "قلعة نخل من الأسفل"
    },
    {
      "src": "images/gallery/nakhal-fort/3.jpg",
      "cap": "قلعة نخل"
    }
  ],
  "royal-opera": [
    {
      "src": "images/gallery/royal-opera/1.jpg",
      "cap": "دار الأوبرا السلطانية مسقط: الساحة والواجهة"
    }
  ],
  "mughsail": [
    {
      "src": "images/gallery/mughsail/1.jpg",
      "cap": "نوافير المغسيل البحرية في ظفار"
    }
  ],
  "khasab-castle": [
    {
      "src": "images/gallery/khasab-castle/1.jpg",
      "cap": "القلعة بين جبال مسندم"
    },
    {
      "src": "images/gallery/khasab-castle/2.jpg",
      "cap": "قلعة خصب من الأعلى"
    }
  ],
  "al-baleed": [
    {
      "src": "images/gallery/al-baleed/1.jpg",
      "cap": "بوابة منتزه البليد الأثري"
    },
    {
      "src": "images/gallery/al-baleed/2.jpg",
      "cap": "آثار حديقة البليد الأثرية"
    }
  ],
  "jabal-akhdar": [
    {
      "src": "images/gallery/jabal-akhdar/1.jpg",
      "cap": "قرية قديمة مهجورة بين الجبال والأشجار"
    },
    {
      "src": "images/gallery/jabal-akhdar/2.jpg",
      "cap": "قرية في الجبل الأخضر بين ورد الجبل"
    }
  ],
  "sur-dhow": [
    {
      "src": "images/gallery/sur-dhow/1.jpg",
      "cap": "بناء سفينة شراعية في ورشة صور"
    },
    {
      "src": "images/gallery/sur-dhow/2.jpg",
      "cap": "صناعة السفن الشراعية في صور"
    }
  ],
  "mutrah": [
    {
      "src": "images/gallery/mutrah/1.jpg",
      "cap": "مدخل سوق مطرح"
    }
  ],
  "jabrin": [
    {
      "src": "images/gallery/jabrin/1.jpg",
      "cap": "قلعة وساحتها المرصوفة"
    },
    {
      "src": "images/gallery/jabrin/2.jpg",
      "cap": "قلعة جبرين من الأعلى"
    }
  ],
  "nizwa": [
    {
      "src": "images/gallery/nizwa/1.jpg",
      "cap": "قلعة نزوى: البرج الدائري الكبير"
    }
  ],
  "land-of-frankincense": [
    {
      "src": "images/gallery/land-of-frankincense/1.jpg",
      "cap": "واجهة متحف أرض اللبان"
    }
  ],
  "armed-forces-museum": [
    {
      "src": "images/gallery/armed-forces-museum/1.jpg",
      "cap": "متحف القوات المسلحة في حصن بيت الفلج"
    }
  ],
  "bait-al-baranda": [
    {
      "src": "images/gallery/bait-al-baranda/1.jpg",
      "cap": "بيت البراندا في مطرح"
    }
  ],
  "omani-french-museum": [
    {
      "src": "images/gallery/omani-french-museum/1.jpg",
      "cap": "المتحف العُماني الفرنسي"
    }
  ],
  "natural-history-museum": [
    {
      "src": "images/gallery/natural-history-museum/1.jpg",
      "cap": "واجهة متحف التاريخ الطبيعي"
    }
  ],
  "oman-across-ages": [
    {
      "src": "images/gallery/oman-across-ages/1.jpg",
      "cap": "متحف عُمان عبر العصور في منح"
    }
  ],
  "bait-al-zubair": [
    {
      "src": "images/gallery/bait-al-zubair/1.jpg",
      "cap": "بيت الباغ ضمن مجمّع بيت الزبير"
    }
  ],
  "duqm-rock-garden": [
    {
      "src": "images/gallery/duqm-rock-garden/1.jpg",
      "cap": "حديقة الصخور في الدقم وقت الغروب"
    }
  ],
  "bat-al-khutm": [
    {
      "src": "images/gallery/bat-al-khutm/1.jpg",
      "cap": "مقابر بات الأثرية على شكل خلايا النحل"
    }
  ],
  "masirah": [
    {
      "src": "images/gallery/masirah/1.jpg",
      "cap": "ساحل جزيرة مصيرة"
    }
  ],
  "ras-al-jinz": [
    {
      "src": "images/gallery/ras-al-jinz/1.jpg",
      "cap": "مركز زوار محمية رأس الجنز للسلاحف"
    }
  ],
  "wadi-shab": [
    {
      "src": "images/gallery/wadi-shab/1.jpg",
      "cap": "ممر وادي شاب وبركته الخضراء"
    }
  ],
  "wadi-bani-khalid": [
    {
      "src": "images/gallery/wadi-bani-khalid/1.jpg",
      "cap": "بِرك وادي بني خالد وسط النخيل"
    }
  ],
  "wahiba-sands": [
    {
      "src": "images/gallery/wahiba-sands/1.jpg",
      "cap": "غروب الشمس فوق رمال الشرقية"
    }
  ],
  "al-hamra": [
    {
      "src": "images/gallery/al-hamra/1.jpg",
      "cap": "أزقة الحمراء القديمة الطينية"
    }
  ],
  "bahla": [
    {
      "src": "images/gallery/bahla/1.jpg",
      "cap": "قلعة بهلاء"
    }
  ],
  "jabal-shams": [
    {
      "src": "images/gallery/jabal-shams/1.jpg",
      "cap": "حافة جبل شمس"
    }
  ],
  "buraimi-fort": [
    {
      "src": "images/gallery/buraimi-fort/1.jpg",
      "cap": "حصن الخندق في البريمي"
    }
  ],
  "musandam-fjords": [
    {
      "src": "images/gallery/musandam-fjords/1.jpg",
      "cap": "خليج في فيوردات مسندم (الخيران)"
    }
  ],
  "khor-rori": [
    {
      "src": "images/gallery/khor-rori/1.jpg",
      "cap": "معرض سمهرم الأثري (خور روري)"
    }
  ],
  "wadi-darbat": [
    {
      "src": "images/gallery/wadi-darbat/1.jpg",
      "cap": "بحيرة وادي دربات"
    }
  ],
  "bimmah": [
    {
      "src": "images/gallery/bimmah/1.jpg",
      "cap": "حفرة بمّه"
    }
  ],
  "old-muscat": [
    {
      "src": "images/gallery/old-muscat/1.jpg",
      "cap": "قصر العلم في مسقط القديمة"
    }
  ],
  "national-museum": [
    {
      "src": "images/gallery/national-museum/1.jpg",
      "cap": "المتحف الوطني في مسقط"
    }
  ],
  "rustaq-fort": [
    {
      "src": "images/gallery/rustaq-fort/1.jpg",
      "cap": "قلعة الرستاق"
    }
  ],
  "sohar-fort": [
    {
      "src": "images/gallery/sohar-fort/1.jpg",
      "cap": "قلعة صحار"
    }
  ],
  "grand-mosque": [
    {
      "src": "images/gallery/grand-mosque/1.jpg",
      "cap": "قاعة الصلاة الرئيسية في جامع السلطان قابوس الأكبر"
    }
  ]
};
