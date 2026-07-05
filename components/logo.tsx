/**
 * [ไฟล์] components/logo.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: โลโก้ตัวหนังสือของเว็บ — แบ่งสี 2 ส่วนแบบตายตัว "Su" (ขาว/เข้มตามธีม)
 *          + "racheat" (สีชมพูเข้ม) ไม่เปลี่ยนตามภาษาที่เลือก (TH/EN) ตามที่ต้องการ
 *          (ต่างจาก profile.shortName ใน lib/content.ts ที่จะเปลี่ยนตามภาษา)
 *
 * ถูกใช้ที่:
 *   - components/navbar.tsx (โลโก้มุมซ้ายบน ลิงก์กลับหน้าแรก)
 *   - components/footer.tsx (ชื่อกลางท้ายเว็บ)
 *
 * วิธีแก้สี/ข้อความ: แก้ตรงนี้ที่เดียว มีผลทั้ง navbar และ footer พร้อมกัน
 * -----------------------------------------------------------------------
 */
export default function Logo() {
  return (
    <span className="text-lg font-bold tracking-tight">
      {/* "Su": สีเข้ม (เกือบดำ) ตอนธีมสว่าง / สีขาว ตอนธีมมืด เพื่อให้อ่านออกทั้งสองธีม */}
      <span className="text-slate-900 dark:text-white">Sura</span>
      {/* "racheat": สีชมพูเข้มตายตัว ไม่เปลี่ยนตามธีมหรือภาษา */}
      <span className="text-pink-600">cheat</span>
    </span>
  );
}
