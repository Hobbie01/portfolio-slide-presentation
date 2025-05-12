import React from "react";
import { FaFileExcel, FaCheckCircle } from "react-icons/fa";

export default function CreditOCRProject() {
  return (
    <div className="flex flex-col gap-3 max-w-xl mx-auto w-full">
      <div className="flex justify-center items-center">
        <img
          src="/assets/phone-export-system.png"
          alt="Phone Export System"
          className="rounded-lg w-72 max-w-full shadow border mb-2"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <b className="block mb-1 text-lg text-zinc-800 dark:text-white">ระบบเช็คเบอร์ซ้ำในไฟล์ Excel</b>
      <div className="text-sm text-gray-800 dark:text-gray-100">
        ระบบนี้ช่วยตรวจสอบเบอร์โทรศัพท์ที่ซ้ำกันในไฟล์ Excel โดยอัตโนมัติ พร้อมแสดงผลลัพธ์ในไฟล์ Excel ที่ดาวน์โหลดได้<br />
        <b>Tech Stack:</b> Typescript, React, Supabase<br />
        <b>ฟีเจอร์:</b>
        <ul className="list-disc pl-5 my-1">
          <li className="flex items-center gap-2"><FaFileExcel/> อัปโหลดไฟล์ Excel</li>
          <li className="flex items-center gap-2"><FaCheckCircle/> ตรวจสอบความเบอร์โทรศัพท์ที่ซ้ำและลบออก</li>
          <li className="flex items-center gap-2"><FaFileExcel/> แสดงผลลัพธ์ในรูปแบบ Excel</li>
        </ul>
        <b>ตัวอย่างการทำงาน:</b> เมื่อผู้ใช้อัปโหลดไฟล์ Excel ที่มีข้อมูลเบอร์โทรศัพท์ ระบบจะประมวลผลและลบบเบอร์ที่ซ้ำกัน พร้อมให้ดาวน์โหลดผลลัพธ์เป็นไฟล์ Excel<br />
        <b>การใช้งาน:</b> ผู้ใช้เพียงแค่อัปโหลดไฟล์ Excel ระบบจะทำการวิเคราะห์และบันทึกข้อมูลไว้<br />
        <b>วัตถุประสงค์ในการพัฒนา:</b> เพื่อช่วยให้การตรวจสอบเบอร์โทรศัพท์ที่ซ้ำกันในไฟล์ Excel ทำได้อย่างรวดเร็วและแม่นยำ ลดความผิดพลาดจากการตรวจด้วยตนเอง<br />
      </div>
    </div>
  );
}
