'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ToolHero from './ToolHero';
import Breadcrumbs from './Breadcrumbs';
import SiteSchema from './SiteSchema';
import { TOOL_DEFINITIONS, VALID_TOOLS } from '../lib/tools';
import { LANGUAGES, TRANSLATIONS } from '../lib/translations';
import { 
  Sparkles, Zap, Music2, DownloadCloud, ChevronDown, CheckCircle2, 
  HelpCircle, Smartphone, Monitor, ShieldCheck, AlertCircle, ArrowRight, Check, Image as ImageIcon,
  History, Globe2, Bell, UserCheck, Video
} from 'lucide-react';

export default function LocalizedToolPage({ langCode = 'de', toolSlug = 'tiktok-avatar' }) {
  const toolData = TOOL_DEFINITIONS[toolSlug] || TOOL_DEFINITIONS['tiktok-video-downloader'];
  const currentLang = LANGUAGES.find(l => l.code === langCode) || LANGUAGES[1];
  const isRtl = currentLang.dir === 'rtl';
  const t = TRANSLATIONS[langCode] || TRANSLATIONS.en;
  const hero = toolData.hero[langCode] || toolData.hero.en;

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  // Active Device Guide Tab (ios, android, pc)
  const [activeDeviceTab, setActiveDeviceTab] = useState('ios');

  // Sync DOM <html> lang and dir attributes dynamically
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = langCode;
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    }
  }, [langCode, isRtl]);

  const homeHref = langCode === 'en' ? '/' : `/${langCode}`;

  const relatedToolsList = VALID_TOOLS.filter(t => t !== toolSlug).slice(0, 4);

  const getToolIcon = (slug) => {
    switch (slug) {
      case 'tiktok-mp3': return Music2;
      case 'tiktok-photo': return ImageIcon;
      case 'tiktok-story': return History;
      case 'douyin-downloader': return Globe2;
      case 'tiktok-ringtone': return Bell;
      case 'tiktok-avatar': return UserCheck;
      default: return Video;
    }
  };

  // 12 Comprehensive FAQs tailored for this tool and language
  const toolFaqs = [
    {
      q: langCode === 'de' ? `Ist der ${hero.badge} völlig kostenlos?` :
         langCode === 'es' ? `¿Es completamente gratis usar este ${hero.badge}?` :
         langCode === 'fr' ? `Cet outil ${hero.badge} est-il totalement gratuit ?` :
         langCode === 'ar' ? `هل أداة ${hero.badge} مجانية تماماً وبدون رسوم؟` :
         langCode === 'pt' ? `O ${hero.badge} é totalmente gratuito?` :
         langCode === 'id' ? `Apakah ${hero.badge} ini benar-benar gratis?` :
         langCode === 'vi' ? `Công cụ ${hero.badge} có hoàn toàn miễn phí không?` :
         langCode === 'tr' ? `${hero.badge} tamamen ücretsiz mi?` :
         langCode === 'it' ? `Questo ${hero.badge} è completamente gratuito?` :
         langCode === 'ru' ? `Этот ${hero.badge} полностью бесплатный?` :
         langCode === 'ja' ? `この ${hero.badge} は完全無料ですか？` :
         `Is this ${hero.badge} completely free to use?`,
      a: langCode === 'de' ? 'Ja, QukTik ist zu 100% kostenlos und ohne versteckte Gebühren nutzbar. Sie können unbegrenzt viele Dateien ohne Registrierung oder Abonnement herunterladen.' :
         langCode === 'es' ? 'Sí, QukTik es 100% gratuito e ilimitado. No requiere registro, pagos mensuales ni descargas de aplicaciones adicionales.' :
         langCode === 'fr' ? 'Oui, QukTik est 100% gratuit et illimité. Aucune inscription, carte bancaire ou abonnement n’est nécessaire.' :
         langCode === 'ar' ? 'نعم، موقع QukTik مجاني بنسبة 100% وبدون أي اشتراكات أو رسوم خفية. يمكنك استخدامه بشكل غير محدود ودون الحاجة لتسجيل حساب.' :
         'Yes, QukTik is 100% free with unlimited downloads, zero subscriptions, and no registration required.'
    },
    {
      q: langCode === 'de' ? 'Muss ich eine zusätzliche App oder Software installieren?' :
         langCode === 'es' ? '¿Necesito instalar alguna app o extensión en mi dispositivo?' :
         langCode === 'fr' ? 'Dois-je installer une application ou extension ?' :
         langCode === 'ar' ? 'هل أحتاج لتثبيت أي تطبيق أو برنامج خارجي؟' :
         'Do I need to install an external app or APK?',
      a: langCode === 'de' ? 'Nein. QukTik funktioniert direkt im Webbrowser (Safari, Chrome, Edge, Firefox) auf allen Smartphones, Tablets und PCs ohne Installation.' :
         langCode === 'es' ? 'No. Funciona directamente en cualquier navegador web moderno (Safari, Chrome, Firefox) en iPhone, Android, Windows y Mac.' :
         langCode === 'fr' ? 'Non. QukTik fonctionne directement dans votre navigateur web sans aucun téléchargement d’APK ni extension tierce.' :
         langCode === 'ar' ? 'لا، يعمل QukTik مباشرة من خلال متصفح الإنترنت الخاص بك دون الحاجة لتنزيل أي برامج أو تطبيقات خارجية.' :
         'No. QukTik works directly inside any web browser on iPhone, Android, Windows, and Mac without APK installations.'
    },
    {
      q: langCode === 'de' ? 'Welche maximale Auflösung wird unterstützt?' :
         langCode === 'es' ? '¿Cuál es la resolución máxima de descarga admitida?' :
         langCode === 'fr' ? 'Quelle est la résolution maximale prise en charge ?' :
         langCode === 'ar' ? 'ما هي أقصى دقة وجودة يدعمها الموقع؟' :
         'What is the maximum resolution and quality supported?',
      a: langCode === 'de' ? 'QukTik lädt Medien in der höchstmöglichen Originalqualität herunter: 1080p Full HD für Videos und Profilbilder sowie 320kbps für MP3 Audiospuren.' :
         langCode === 'es' ? 'Descarga en la máxima resolución original disponible: 1080p Full HD para video e imágenes, y 320kbps para audio MP3 sin compresión.' :
         langCode === 'fr' ? 'QukTik télécharge dans la qualité originale maximale : 1080p Full HD pour les vidéos et avatars, et 320kbps pour les fichiers audio MP3.' :
         langCode === 'ar' ? 'يدعم الموقع الدقة الأصلية الكاملة 1080p Full HD للفيديوهات والصور الشخصية، وصوت MP3 بنقاء 320kbps بدون ضغط.' :
         'QukTik extracts the original source file at up to 1080p Full HD resolution for video and images, and 320kbps for MP3 audio.'
    },
    {
      q: langCode === 'de' ? 'Funktioniert der Download auch auf iPhone und iPad (iOS)?' :
         langCode === 'es' ? '¿Funciona la descarga en dispositivos iPhone e iPad (iOS)?' :
         langCode === 'fr' ? 'Le téléchargement fonctionne-t-il sur iPhone et iPad (iOS) ?' :
         langCode === 'ar' ? 'هل يعمل التحميل على أجهزة آيفون وآيباد (iOS)؟' :
         'Does this work seamlessly on iPhone and iPad (iOS)?',
      a: langCode === 'de' ? 'Ja. Öffnen Sie die Seite in Safari auf iOS 13 oder neuer. Nach dem Klick auf Download können Sie die Datei direkt in Ihre Fotos-App oder Dateien speichern.' :
         langCode === 'es' ? 'Sí. Abre Safari en iOS 13 o superior, pega el enlace y pulsa descargar. Luego guarda el archivo directamente en Fotos o Archivos.' :
         langCode === 'fr' ? 'Oui. Utilisez le navigateur Safari sur iOS 13 ou supérieur. Vous pouvez ensuite enregistrer le fichier directement dans Photos.' :
         langCode === 'ar' ? 'نعم، استخدم متصفح Safari على نظام iOS 13 أو أحدث، ويمكنك حفظ الملف فوراً في ألبوم الصور أو تطبيق الملفات.' :
         'Yes. On iOS 13+, open Safari, paste the link, and save the resulting file directly to your Camera Roll or Files app.'
    },
    {
      q: langCode === 'de' ? 'Können Inhalte von privaten Konten heruntergeladen werden?' :
         langCode === 'es' ? '¿Se pueden descargar contenidos de cuentas privadas?' :
         langCode === 'fr' ? 'Peut-on télécharger des contenus provenant de comptes privés ?' :
         langCode === 'ar' ? 'هل يمكن تحميل محتوى من الحسابات الخاصة (Private)؟' :
         'Can media from private accounts be downloaded?',
      a: langCode === 'de' ? 'Nein. Zum Schutz der Privatsphäre und zur Einhaltung der Richtlinien können ausschließlich öffentlich geteilte Inhalte verarbeitet werden.' :
         langCode === 'es' ? 'No. Por respeto a la privacidad de los usuarios y normativas de derechos, solo se admiten contenidos publicados de forma pública.' :
         langCode === 'fr' ? 'Non. Pour des raisons de confidentialité et de conformité, seuls les contenus publiquement accessibles peuvent être traités.' :
         langCode === 'ar' ? 'لا، احتراماً لخصوصية المستخدمين والقوانين، يدعم الموقع المحتوى المنشور للعامة (Public) فقط ولا يدعم الحسابات المقفلة.' :
         'No. To protect user privacy and respect platform policies, QukTik only processes publicly shared content.'
    },
    {
      q: langCode === 'de' ? 'Wo werden die heruntergeladenen Dateien gespeichert?' :
         langCode === 'es' ? '¿En qué carpeta se guardan los archivos descargados?' :
         langCode === 'fr' ? 'Où sont stockés les fichiers téléchargés ?' :
         langCode === 'ar' ? 'أين أجد الملفات بعد اكتمال تحميلها؟' :
         'Where are the downloaded files saved on my device?',
      a: langCode === 'de' ? 'Auf Android und PC landen Dateien im Ordner „Downloads“. Auf dem iPhone finden Sie sie in der Dateien-App oder im Safari Download-Manager.' :
         langCode === 'es' ? 'En Android y PC se guardan en la carpeta "Descargas". En iPhone/iPad se ubican en la app Archivos o en Descargas de Safari.' :
         langCode === 'fr' ? 'Sur Android et PC, dans le dossier « Téléchargements ». Sur iPhone, dans l’application Fichiers ou l’album Photos.' :
         langCode === 'ar' ? 'في هواتف أندرويد والكمبيوتر، تجدها في مجلد Downloads. في الآيفون، تجدها في تطبيق Files أو في ألبوم الصور.' :
         'On Android and PC, files save in the "Downloads" folder. On iPhone/iPad, check the Files app or Safari Downloads manager.'
    },
    {
      q: langCode === 'de' ? 'Speichert QukTik Kopien der heruntergeladenen Medien?' :
         langCode === 'es' ? '¿QukTik guarda copias de los archivos en sus servidores?' :
         langCode === 'fr' ? 'QukTik conserve-t-il des copies des fichiers téléchargés ?' :
         langCode === 'ar' ? 'هل يحتفظ خادم QukTik بنسخ من الملفات التي تم تحميلها؟' :
         'Does QukTik store or archive copies of downloaded media?',
      a: langCode === 'de' ? 'Nein. QukTik speichert keine Dateien auf eigenen Servern. Alle Medien werden direkt vom offiziellen CDN an Ihren Browser weitergeleitet.' :
         langCode === 'es' ? 'No. QukTik no almacena ni archiva archivos multimedia. La transferencia se realiza directamente desde la CDN pública a tu navegador.' :
         langCode === 'fr' ? 'Non. Aucun média n’est stocké sur nos serveurs. Le flux transite directement des serveurs CDN à votre appareil.' :
         langCode === 'ar' ? 'لا، موقع QukTik لا يحتفظ بأي وسائط أو ملفات على خوادمه؛ يتم تمرير البث مباشرة من شبكات التوزيع الرسمية إلى جهازك.' :
         'No. QukTik does not store or archive media files. All streams are delivered directly from public CDN servers to your device.'
    },
    {
      q: langCode === 'de' ? 'Gibt es ein tägliches Download-Limit?' :
         langCode === 'es' ? '¿Hay algún límite en el número de descargas al día?' :
         langCode === 'fr' ? 'Y a-t-il une limite quotidienne de téléchargement ?' :
         langCode === 'ar' ? 'هل يوجد حد أقصى لعدد مرات التحميل يومياً؟' :
         'Is there a daily limit on downloads?',
      a: langCode === 'de' ? 'Nein. Sie können so viele Dateien herunterladen, wie Sie möchten. Es gibt keinerlei tägliche oder wöchentliche Begrenzung.' :
         langCode === 'es' ? 'No. El servicio es completamente ilimitado para todos los usuarios. Puedes descargar tantas veces como necesites.' :
         langCode === 'fr' ? 'Non. Il n’y a aucune limite quotidienne ou hebdomadaire. Vous pouvez télécharger autant que vous le souhaitez.' :
         langCode === 'ar' ? 'لا، الخدمة مفتوحة وغير محدودة لجميع الزوار على مدار الساعة دون أي قيود على عدد الملفات.' :
         'No. There is no daily or hourly rate limit. You can download as many files as you need for your personal archive.'
    },
    {
      q: langCode === 'de' ? 'Werden Wasserzeichen oder störende Logos entfernt?' :
         langCode === 'es' ? '¿Se eliminan los logotipos y marcas de agua molestos?' :
         langCode === 'fr' ? 'Les filigranes et logos sont-ils retirés ?' :
         langCode === 'ar' ? 'هل تتم إزالة العلامات المائية والشعارات نهائياً؟' :
         'Are watermarks and bouncing logos completely removed?',
      a: langCode === 'de' ? 'Ja. Die heruntergeladenen Dateien sind zu 100% sauber ohne störende Wasserzeichen, transparente Logos oder Benutzernamen-Stempel.' :
         langCode === 'es' ? 'Sí. Los archivos generados son 100% limpios sin marcas de agua en movimiento, logos transparentes ni marcas del creador.' :
         langCode === 'fr' ? 'Oui. Les fichiers téléchargés sont 100% propres, sans logo sautillant ni filigrane superposé.' :
         langCode === 'ar' ? 'نعم، يتم استخراج الملفات الأصلية النظيفة 100% بدون أي شعار متحرك أو علامات مائية مضافة.' :
         'Yes. All output files are 100% clean with zero bouncing logos, usernames, or platform stamps.'
    },
    {
      q: langCode === 'de' ? 'Was tun, wenn ein Link als ungültig gemeldet wird?' :
         langCode === 'es' ? '¿Qué hacer si el enlace se marca como no válido?' :
         langCode === 'fr' ? 'Que faire si le lien est indiqué comme invalide ?' :
         langCode === 'ar' ? 'ماذا أفعل إذا ظهرت رسالة خطأ بأن الرابط غير صالح؟' :
         'What should I do if a link shows an invalid URL error?',
      a: langCode === 'de' ? 'Stellen Sie sicher, dass Sie den vollständigen Link über „Teilen > Link kopieren“ kopiert haben und das Video öffentlich einsehbar ist.' :
         langCode === 'es' ? 'Asegúrate de copiar el enlace mediante "Compartir > Copiar enlace" y verificar que el contenido no esté en modo privado o eliminado.' :
         langCode === 'fr' ? 'Vérifiez que vous avez copié le lien complet via « Partager > Copier le lien » et que le contenu n’est pas privé.' :
         langCode === 'ar' ? 'تأكد من نسخ الرابط عبر زر (مشاركة > نسخ الرابط) وتأكد من أن الفيديو منشور للعامة وليس محذوفاً.' :
         'Ensure you copy the direct URL via "Share > Copy Link" and confirm the media is publicly accessible and not deleted.'
    },
    {
      q: langCode === 'de' ? 'Ist die Nutzung von QukTik legal (Fair Use)?' :
         langCode === 'es' ? '¿Es legal usar QukTik para archivar contenido (Uso Justo)?' :
         langCode === 'fr' ? 'Est-il légal d’utiliser QukTik (Usage Équitable) ?' :
         langCode === 'ar' ? 'هل استخدام موقع QukTik قانوني وفق مبادئ الاستخدام العادل؟' :
         'Is using QukTik legal under Fair Use principles?',
      a: langCode === 'de' ? 'Ja, für die persönliche, nicht-kommerzielle Archivierung und eigene Backups. Bitte respektieren Sie die Urheberrechte der Ersteller.' :
         langCode === 'es' ? 'Sí, para archivo personal, educativo y sin fines de lucro. Siempre respeta la propiedad intelectual de los creadores originales.' :
         langCode === 'fr' ? 'Oui, pour un usage personnel, éducatif ou d’archivage privé. Respectez toujours les droits d’auteur des créateurs.' :
         langCode === 'ar' ? 'نعم، مخصص للأرشفة الشخصية والاستخدام غير التجاري والتعليمي. يجب دائماً احترام حقوق الملكية الفكرية لصناع المحتوى.' :
         'Yes, for personal, non-commercial archiving, research, and creator backups. Always respect the copyright of original creators.'
    },
    {
      q: langCode === 'de' ? 'Wie kann ich QukTik auf meinem Startbildschirm installieren (PWA)?' :
         langCode === 'es' ? '¿Cómo instalo QukTik en la pantalla de inicio (PWA)?' :
         langCode === 'fr' ? 'Comment installer QukTik sur mon écran d’accueil (PWA) ?' :
         langCode === 'ar' ? 'كيف أقوم بتثبيت QukTik كتطبيق على الشاشة الرئيسية (PWA)؟' :
         'How do I install QukTik on my phone home screen as a PWA app?',
      a: langCode === 'de' ? 'Tippen Sie in Safari auf „Teilen > Zum Home-Bildschirm“ oder klicken Sie oben auf den Button „App installieren“ für ein vollwertiges App-Erlebnis.' :
         langCode === 'es' ? 'Pulsa en Safari "Compartir > Añadir a pantalla de inicio" o haz clic en "Instalar App" para tener acceso directo instantáneo.' :
         langCode === 'fr' ? 'Appuyez dans Safari sur « Partager > Sur l’écran d’accueil » ou cliquez sur « Installer App » pour une expérience plein écran.' :
         langCode === 'ar' ? 'في متصفح سفاري اضغط (مشاركة > إضافة إلى الشاشة الرئيسية) أو اضغط على زر (تثبيت التطبيق) في الأعلى لتثبيته فوراً.' :
         'In Safari or Chrome, tap "Share > Add to Home Screen" or click the "Install App" button in the header for a native full-screen experience.'
    }
  ];

  return (
    <div className={`relative overflow-hidden ${isRtl ? 'rtl' : 'ltr'}`} dir={currentLang.dir}>
      <SiteSchema />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs 
          items={[
            { name: currentLang.label, url: homeHref },
            { name: hero.badge, url: `${homeHref}/${toolSlug}` }
          ]} 
        />
      </div>

      {/* 1. Downloader Hero */}
      <ToolHero
        title={hero.title}
        subtitle={hero.subtitle}
        placeholder={hero.placeholder}
        buttonText={hero.button}
        badge={hero.badge}
        mode={toolData.mode}
        sampleUrl={toolData.sampleUrl}
      />

      {/* 2. Trust Highlights Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">100%</span>
            <span className="text-xs font-medium text-slate-500">
              {langCode === 'de' ? 'Ohne Wasserzeichen' : langCode === 'es' ? 'Sin Marca' : langCode === 'ar' ? 'بدون علامة مائية' : 'Clean Quality'}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">1080p</span>
            <span className="text-xs font-medium text-slate-500">
              {langCode === 'de' ? 'Originalauflösung' : langCode === 'es' ? 'Calidad Fuente' : langCode === 'ar' ? 'دقة فائقة الأصلية' : 'Source Quality'}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">320kbps</span>
            <span className="text-xs font-medium text-slate-500">
              {langCode === 'de' ? 'Studio Audio' : langCode === 'es' ? 'Audio Estudio' : langCode === 'ar' ? 'صوت استوديو نقي' : 'Studio Audio'}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">0</span>
            <span className="text-xs font-medium text-slate-500">
              {langCode === 'de' ? 'Kein Login' : langCode === 'es' ? 'Sin Registro' : langCode === 'ar' ? 'بدون تسجيل دخول' : 'No Registration'}
            </span>
          </div>
        </div>
      </div>

      {/* 3. Multi-Device Masterclass (iPhone, Android, PC) */}
      <section className="py-14 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              {currentLang.label} • {hero.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
              {langCode === 'de' ? 'Schritt-für-Schritt Anleitung für Alle Geräte' :
               langCode === 'es' ? 'Guía Paso a Paso para Cada Dispositivo' :
               langCode === 'fr' ? 'Guide Étape par Étape pour Tous les Appareils' :
               langCode === 'ar' ? 'دليل الاستخدام خطوة بخطوة لجميع الأجهزة' :
               'Step-by-Step Multi-Device Masterclass'}
            </h2>
          </div>

          {/* Device Tabs */}
          <div className="flex justify-center">
            <div className="inline-flex p-1 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <button
                type="button"
                onClick={() => setActiveDeviceTab('ios')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeDeviceTab === 'ios'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>iOS / iPhone</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveDeviceTab('android')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeDeviceTab === 'android'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Android</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveDeviceTab('pc')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeDeviceTab === 'pc'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>PC / Mac</span>
              </button>
            </div>
          </div>

          {/* Tab Contents (All 3 rendered in DOM for 100% SEO indexing) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm max-w-3xl mx-auto">
            <div className={activeDeviceTab === 'ios' ? 'block space-y-3' : 'hidden'}>
              <h4 className="text-lg font-bold text-slate-900 text-rose-600">
                {langCode === 'de' ? 'iPhone & iPad Anleitung (iOS Safari)' :
                 langCode === 'es' ? 'Instrucciones para iPhone e iPad (iOS Safari)' :
                 langCode === 'fr' ? 'Guide pour iPhone et iPad (Safari iOS)' :
                 langCode === 'ar' ? 'خطوات التحميل على آيفون وآيباد (متصفح Safari)' :
                 'iPhone & iPad Guide (iOS Safari)'}
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600 leading-relaxed">
                <li>{langCode === 'de' ? 'Öffnen Sie TikTok und tippen Sie bei dem gewünschten Inhalt auf „Teilen > Link kopieren“.' : 'Open TikTok and tap Share > Copy Link on the desired content.'}</li>
                <li>{langCode === 'de' ? 'Öffnen Sie Safari und fügen Sie den Link in das obige Eingabefeld ein.' : 'Open Safari and paste the link into the box above.'}</li>
                <li>{langCode === 'de' ? 'Tippen Sie auf Herunterladen und bestätigen Sie die Datei im Safari Download-Manager.' : 'Tap Download and confirm the save in Safari Downloads.'}</li>
                <li>{langCode === 'de' ? 'Öffnen Sie die Datei und tippen Sie auf „Video/Bild sichern“, um sie in Ihrer Galerie zu speichern.' : 'Open the file and tap "Save Video/Image" to send it to Camera Roll.'}</li>
              </ol>
            </div>

            <div className={activeDeviceTab === 'android' ? 'block space-y-3' : 'hidden'}>
              <h4 className="text-lg font-bold text-slate-900 text-rose-600">
                {langCode === 'de' ? 'Android Anleitung (Samsung, Xiaomi, Google Pixel)' :
                 langCode === 'es' ? 'Instrucciones para Teléfonos Android' :
                 langCode === 'fr' ? 'Guide pour Téléphones Android' :
                 langCode === 'ar' ? 'خطوات التحميل على هواتف أندرويد' :
                 'Android Smartphone Guide'}
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600 leading-relaxed">
                <li>{langCode === 'de' ? 'Kopieren Sie den Link direkt aus der TikTok App über den Teilen-Button.' : 'Copy the URL from TikTok via the Share button.'}</li>
                <li>{langCode === 'de' ? 'Öffnen Sie Google Chrome und rufen Sie quktik.com auf.' : 'Open Chrome and visit QukTik.'}</li>
                <li>{langCode === 'de' ? 'Nutzen Sie die „⚡ Einfügen & Starten“ Schaltfläche für sofortigen Download.' : 'Use the 1-Tap Paste & Go button.'}</li>
                <li>{langCode === 'de' ? 'Die Datei wird direkt im Ordner „Downloads“ Ihres Speichers gesichert.' : 'The file is saved immediately to your Downloads folder.'}</li>
              </ol>
            </div>

            <div className={activeDeviceTab === 'pc' ? 'block space-y-3' : 'hidden'}>
              <h4 className="text-lg font-bold text-slate-900 text-rose-600">
                {langCode === 'de' ? 'Computer Anleitung (Windows, macOS, Linux)' :
                 langCode === 'es' ? 'Instrucciones para Computadoras PC y Mac' :
                 langCode === 'fr' ? 'Guide pour Ordinateurs PC et Mac' :
                 langCode === 'ar' ? 'خطوات التحميل على أجهزة الكمبيوتر ولابتوب' :
                 'Desktop & Laptop Guide (PC / Mac)'}
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600 leading-relaxed">
                <li>{langCode === 'de' ? 'Kopieren Sie die TikTok-URL aus der Adressleiste Ihres Desktop-Browsers.' : 'Copy the TikTok URL from your browser address bar.'}</li>
                <li>{langCode === 'de' ? 'Drücken Sie einfach Strg + V (auf Mac: Cmd + V) auf dieser Webseite.' : 'Press Ctrl + V (Mac: Cmd + V) anywhere on this page.'}</li>
                <li>{langCode === 'de' ? 'Klicken Sie auf Herunterladen und speichern Sie die Datei am gewünschten Ort.' : 'Click Download and save the media file to your desktop.'}</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXACTLY 12 FAQs ACCORDION (With answers 100% in DOM) */}
      <section className="py-14 sm:py-18 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>12 FAQs • {currentLang.label}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            {langCode === 'de' ? `Häufig Gestellte Fragen (${toolFaqs.length})` :
             langCode === 'es' ? `Preguntas Frecuentes (${toolFaqs.length})` :
             langCode === 'fr' ? `Questions Fréquemment Posées (${toolFaqs.length})` :
             langCode === 'ar' ? `الأسئلة الأكثر شيوعاً (${toolFaqs.length})` :
             `Frequently Asked Questions (${toolFaqs.length})`}
          </h2>
        </div>

        <div className="space-y-3">
          {toolFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-slate-900 hover:text-rose-600 transition-colors cursor-pointer"
                >
                  <span className="pr-4">{idx + 1}. {faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 ${isOpen ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Related Localized Tools Grid */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {langCode === 'de' ? 'Weitere Kostenlose QukTik Werkzeuge' :
               langCode === 'es' ? 'Otras Herramientas Gratuitas de QukTik' :
               langCode === 'fr' ? 'Autres Outils QukTik Gratuits' :
               langCode === 'ar' ? 'المزيد من أدوات QukTik المجانية' :
               'More Free QukTik Tools'}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedToolsList.map((slug) => {
              const Icon = getToolIcon(slug);
              const def = TOOL_DEFINITIONS[slug];
              const tTitle = def?.titles[langCode] || def?.titles.en;
              const linkHref = langCode === 'en' ? `/${slug}` : `/${langCode}/${slug}`;
              return (
                <Link
                  key={slug}
                  href={linkHref}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-rose-300 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                      {tTitle?.split('|')[0]?.trim()}
                    </h4>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-rose-600">
                    <span>{langCode === 'de' ? 'Jetzt öffnen' : langCode === 'es' ? 'Abrir herramienta' : langCode === 'ar' ? 'افتح الأداة' : 'Open Tool'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Global Language Cross-Links for THIS Specific Tool */}
      <section className="py-8 border-t border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
            🌍 {hero.badge} in 12 Languages:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {LANGUAGES.map((l) => {
              const targetHref = l.code === 'en' ? `/${toolSlug}` : `/${l.code}/${toolSlug}`;
              const isCurrent = l.code === langCode;
              return (
                <a
                  key={l.code}
                  href={targetHref}
                  onClick={(e) => {
                    e.preventDefault();
                    try {
                      localStorage.setItem('quktik_preferred_lang', l.code);
                      document.cookie = `quktik_lang=${l.code}; path=/; max-age=31536000; SameSite=Lax`;
                    } catch (err) {}
                    window.location.href = targetHref;
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-rose-50 text-rose-700 border-rose-300 font-bold shadow-2xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
