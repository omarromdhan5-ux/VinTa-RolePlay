# VinTa RolePlay Management Platform

🎮 منصة إدارة FiveM متكاملة لخادم VinTa RolePlay

## ✨ الميزات الرئيسية

- 🎯 **نظام Whitelist** - أسئلة مخصصة + تصريح/رفض من الإدمن
- 👥 **نظام Staff** - إدارة طلبات الموظفين
- 🏘️ **نظام Gang** - إدارة طلبات العصابات
- 💰 **نظام Donations** - 5 فئات (سيارات، دراجات، عقارات، تصميم، شخصيات)
- 🔐 **تسجيل دخول Discord** - تسجيل دخول تلقائي بحساب Discord
- 👤 **نظام الأدوار** - Owner, Staff, User
- 🎨 **تخصيص الموقع** - تغيير الألوان والأسماء (Owner فقط)
- 📹 **نظام حفظ الفيديو** - حفظ فيديو الإجابات

## 🚀 التثبيت

### متطلبات التشغيل
- Node.js 14+
- MongoDB
- حساب Discord Developer

### خطوات التثبيت

```bash
# 1. استنساخ المستودع
git clone https://github.com/omarromdhan5-ux/VinTa-RolePlay.git
cd VinTa-RolePlay

# 2. تثبيت المتعلقات
npm install

# 3. إعداد متغيرات البيئة
cp .env.example .env
# قم بتحديث .env بـ Discord OAuth credentials و MongoDB URI

# 4. تشغيل الخادم
npm run dev
```

## 📝 متغيرات البيئة

```env
DISCORD_CLIENT_ID=your_discord_client_id
DISCORD_CLIENT_SECRET=your_discord_client_secret
MONGODB_URI=mongodb://localhost:27017/vinta-roleplay
JWT_SECRET=your_jwt_secret_key
PORT=5000
FRONTEND_URL=http://localhost:3000
```

## 📡 API Endpoints

### Authentication
- `GET /auth/discord` - تسجيل دخول Discord
- `GET /auth/user` - الحصول على المستخدم الحالي
- `GET /auth/logout` - تسجيل الخروج

### Whitelist
- `GET /api/whitelist/questions` - الحصول على الأسئلة
- `POST /api/whitelist/submit` - إرسال الطلب
- `GET /api/whitelist/pending` - الطلبات المعلقة
- `POST /api/whitelist/review/:id` - مراجعة الطلب

### Staff
- `GET /api/staff/pending` - الطلبات المعلقة
- `POST /api/staff/submit` - إرسال طلب
- `POST /api/staff/review/:id` - مراجعة الطلب

### Gang
- `GET /api/gang/pending` - الطلبات المعلقة
- `POST /api/gang/submit` - إرسال طلب
- `POST /api/gang/review/:id` - مراجعة الطلب

### Donations
- `GET /api/donation/:category` - الحصول على المنتجات
- `POST /api/donation/add` - إضافة منتج
- `PUT /api/donation/:id` - تحديث المنتج
- `DELETE /api/donation/:id` - حذف المنتج

### Admin
- `GET /api/admin/settings` - إعدادات الموقع
- `PUT /api/admin/settings` - تحديث الإعدادات
- `POST /api/admin/assign-staff/:userId` - تعيين موظف
- `GET /api/admin/users` - جميع المستخدمين

## 📊 نظام الأدوار والصلاحيات

### Owner
✅ جميع الصلاحيات
✅ تغيير إعدادات الموقع
✅ تعيين وإزالة موظفين
✅ مراجعة جميع الطلبات

### Staff
✅ عرض طلبات Whitelist فقط
✅ مراجعة طلبات Whitelist

### User
✅ إرسال الطلبات
✅ إضافة منتجات Donation (مع رابط Discord)

## 🛠️ الهيكل

```
VinTa-RolePlay/
├── models/           # نماذج قاعدة البيانات
├── routes/           # مسارات API
├── server.js         # خادم Express
└── .env.example      # متغيرات البيئة
```

## 🤝 المساهمة

نرحب بمساهماتك! يرجى:
1. Fork المستودع
2. إنشاء فرع جديد
3. القيام بالتعديلات
4. إرسال Pull Request

## 📄 الترخيص

MIT License

## 📧 التواصل

للأسئلة والاقتراحات: omarromdhan5@gmail.com

---

**VinTa RolePlay** - منصة إدارة FiveM احترافية 🎮
