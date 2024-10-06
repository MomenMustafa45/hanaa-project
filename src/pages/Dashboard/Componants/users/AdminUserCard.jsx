import React from "react";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AdminUserCard({ user }) {
  const navigate = useNavigate();
  const { t } = useTranslation("global"); 
  const handleCardClick = () => {
    navigate(`/AdminUserInfo`, { state: { user } });
  };

  return (
    <div className="flex flex-wrap gap-9 p-10">
      <Card className="xs:w-72 sm:w-80 cursor-pointer" onClick={handleCardClick}>
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <img
            alt={`${user.employeeName} image`}
            src={user.profileImage || "https://www.lightsong.net/wp-content/uploads/2020/12/blank-profile-circle.png"}
           
            className="mb-3 rounded-full shadow-lg w-32 h-32"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            {user.employeeName}
          </h5>
          <span className="text-sm text-gray-500">{t("job.jobTitle")}: {user.jobTitle}</span>
          <span className="text-sm text-gray-500">
            {" "}
            {t("job.employeeId")}: {user.employeeId} 
          </span>
          <span className="text-sm text-gray-500">
          {t("job.phoneNumber")}:   {user.phoneNumber} 
          </span>
        </div>
      </Card>
    </div>
  );
}
