import React from "react";
import { FaRegFileAlt } from "react-icons/fa";

export default function CreditOCRProject() {
  return (
    <div className="flex items-center gap-3">
      <FaRegFileAlt className="text-4xl icon-bounce-hover" />
      <div>
        <b>ระบบเติมเครดิต + OCR</b><br />
        ผู้ใช้ส่งสลิป → แยกยอดเงิน → อนุมัติ → ดึงเบอร์
      </div>
    </div>
  );
}
