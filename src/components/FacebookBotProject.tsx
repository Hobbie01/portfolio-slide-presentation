import React from "react";
import { FaFacebook } from "react-icons/fa";

export default function FacebookBotProject() {
  return (
    <div className="p-4 rounded-xl">
      <div className="flex items-center gap-3 mb-2">
        <FaFacebook className="text-4xl text-blue-500 icon-bounce-hover" />
        <h2 className="text-xl font-bold text-white">Facebook Bot Automation</h2>
      </div>

      <div className="text-sm text-white">
        ระบบบอทจัดการ Facebook โดยอัตโนมัติ รองรับการค้นหา/คอมเมนต์/โพสต์ในกลุ่มและโพสต์ต่าง ๆ ได้อย่างแม่นยำและยืดหยุ่น

        <div className="mt-3 font-semibold">🧠 ความสามารถหลัก</div>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><b>1.1</b> ค้นหาโพสต์จากหัวข้อ <i>(พร้อมแสดงผล)</i></li>
          <li><b>1.2</b> ค้นหาโพสต์จากหัวข้อ <i>(ไม่แสดงผล)</i></li>
          <li><b>2.1</b> คอมเมนต์ในกลุ่มแบบระบุ keyword</li>
          <li><b>2.2</b> คอมเมนต์ในกลุ่มแบบไม่ระบุ keyword</li>
          <li><b>3</b> คอมเมนต์ในกลุ่มขั้นสูง <i>(รองรับเงื่อนไขหลายแบบ)</i></li>
          <li><b>4</b> คอมเมนต์ในโพสต์ที่กำหนดโดยตรง</li>
          <li><b>5</b> โพสต์ข้อความหรือรูปภาพในกลุ่ม</li>
        </ul>

        <div className="mt-3 font-semibold">🛠️ Tech Stack</div>
        <p className="ml-2 mt-1">Python, Selenium</p>

        <div className="mt-3 text-xs text-gray-300">
          * บอททำงานแบบอัตโนมัติ ใช้ session และ cookie อย่างปลอดภัย<br />
          * เหมาะสำหรับงาน marketing, แชร์ข้อมูล, หรือจัดการ community
        </div>
      </div>
    </div>
  );
}
