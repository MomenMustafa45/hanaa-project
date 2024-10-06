/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import Topbanner from "../../Home/componants/banner/Topbanner";
import Bottombanner from "../../Home/componants/banner/Bottombanner";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import db from "../../../config/firebase";
import { useTranslation } from "react-i18next";

export default function SubjectInfo() {
  const { t, i18n } = useTranslation("global");

  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  const location = useLocation();
  const navigate = useNavigate();

  const [subject, setSubject] = useState(null);
  const [employees, setEmployees] = useState([]);
  const clickedSubject = location.state?.subject;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!clickedSubject) {
          console.error("No subject data found in location state");
          return;
        }

        const employeesSnapshot = await getDocs(collection(db, "employees"));
        const employeesList = employeesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setEmployees(employeesList);

        setSubject(clickedSubject);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [clickedSubject]);

  const emp1 = employees.find(
    (emp) => emp.employeeId === clickedSubject.emp1Id
  );
  const emp2 = employees.find(
    (emp) => emp.employeeId === clickedSubject.emp2Id
  );

  return (
    <div>
      <Topbanner />
      <div className="min-h-screen bg-gray-100 justify-center flex items-center">
        <Card className="w-[1200px] ">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            {/* الجدول */}
            <div className="mt-4 w-full">
              <table
                className="min-w-full  border-collapse table-fixed"
                dir={direction}
              >
                <tbody className="text-gray-700">
                  <tr>
                    <td className="px-4 py-2 font-bold w-1/2">
                      {t("subjectEditForm.subjectNum")}
                    </td>
                    <td className="px-4 py-2 break-words w-1/2">
                      {clickedSubject.subjectNum}
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2 font-bold w-1/2">
                      {t("subjectEditForm.subjectTitle")}
                    </td>
                    <td className="px-4 py-2 break-words w-1/2">
                      {clickedSubject.subjectTitle}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-bold w-1/2">
                      {t("subjectEditForm.subjectContent")}
                    </td>
                    <td className="px-4 py-2 break-words w-1/2 overflow-hidden">
                      {clickedSubject.subjectContent}
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2 font-bold w-1/2">
                      {t("subjectInfo.authorizedEmployee")}
                    </td>
                    <td className="px-4 py-2 break-words w-1/2">
                      {clickedSubject.emp1.employeeName} -{" "}
                      {clickedSubject.emp1.jobTitle}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-bold w-1/2">
                      {t("subjectInfo.sharedEmployees")}
                    </td>
                    <td className="px-4 py-2 break-words w-1/2">
                      {emp2?.employeeName} - {emp2?.role}
                    </td>
                  </tr>
                  {clickedSubject.sharedEmployees.length > 0 ? (
                    clickedSubject.sharedEmployees.map((emp) => {
                      const user = employees.find(
                        (empl) => empl.id === emp.empId
                      );
                      console.log("Found user:", user);
                      return (
                        <tr
                          className="cursor-pointer hover:bg-gray-100"
                          onClick={() => {
                            if (user) {
                              navigate("/userinfo", { state: { user } });
                            } else {
                              console.log(
                                "No user found for empId:",
                                emp.empId
                              );
                            }
                          }}
                          key={emp.empId}
                        >
                          <td className="px-4 py-2 break-words w-1/2 overflow-hidden">
                            {emp.role}
                          </td>
                          <td className="px-4 py-2 break-words w-1/2 overflow-hidden">
                            {user
                              ? user.employeeName
                              : `Employee ID: ${emp.empId}`}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={2} className="px-4 py-2 text-center">
                        {t("subjectInfo.noRelatedSubjects")}
                      </td>
                    </tr>
                  )}
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2 font-bold w-1/2">
                      {t("subjectEditForm.negotiationLimit")}
                    </td>
                    <td className="px-4 py-2 break-words w-1/2">
                      {clickedSubject.negotiationLimit}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-bold w-1/2">
                      {t("subjectInfo.notes")}
                    </td>
                    <td className="px-4 py-2 break-words w-1/2 overflow-hidden">
                      {clickedSubject.notes}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
      <Bottombanner />
    </div>
  );
}
