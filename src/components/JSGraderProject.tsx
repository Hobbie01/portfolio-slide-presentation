import React from "react";

export default function JSGraderProject() {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <div className="flex justify-center items-center">
        <img
          src="/assets/jsgrader_accepted.png"
          alt="JS Grader Success Example"
          className="rounded-lg w-72 shadow border mb-2 mx-auto"
        />
      </div>
      <div className="flex-1">
        <b className="block mb-1">JS Grader</b>
        <div className="text-sm">
          ระบบตรวจผลลัพธ์การทำงานของโค้ดที่ Users ส่งมาเป็น Javascript ให้ Server ตรวจสอบและส่งกลับแบบ JSON ต้นแบบแนวคิดคล้าย <a className='underline text-blue-300' href="https://leetcode.com" target="_blank" rel="noopener">LeetCode</a><br />
          <b>Tech Stack:</b> Koa.js, MySQL, Unit Test: Jest, API: OpenAPI<br />
          <b>ฟีเจอร์:</b> Users อัปโหลดไฟล์ .js / Server ตรวจ-ส่งผล / รองรับโค้ดผิดถูก<br />
          <b>ตัวอย่าง (Accepted):</b> ตามภาพซ้าย<br />
          <b>ตัวอย่าง (Wrong Answer):</b> กรณีผิด Server จะ return JSON error/ไม่ผ่าน (ตัวอย่างหลายรูปสามารถเพิ่ม gallery ภายหลังได้)<br />
        </div>
      </div>
    </div>
  );
}
