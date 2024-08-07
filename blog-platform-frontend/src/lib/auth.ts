"use client";
export default async () => {
  const token: String | null = await window.localStorage.getItem("token");
  return (await token) == null ? false : true;
};
