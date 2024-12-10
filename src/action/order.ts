"use server";
import supabase from "@/utils/supabase";
import { cookies } from "next/headers";

export async function insertOrder({
  scheduleId,
  passangerId,
}: {
  scheduleId: string;
  passangerId: string;
}) {
  const cookiePros = cookies();
  const cookieEmail = cookiePros.get("email")?.value;
  const { error } = await supabase.from("pemesanan").insert({
    id_status: "9420e0c8-3dad-4364-b01f-a447b946c580",
    id_jadwal_keberangkatan: scheduleId,
    id_data_penumpang: passangerId,
    email: cookieEmail,
  });

  return error;
}

export async function getOrderHistory() {
  const cookiePros = cookies();
  const cookieEmail = cookiePros.get("email")?.value;

  const { data: history } = await supabase
    .from("pemesanan")
    .select(
      "*, id_status(*), id_jadwal_keberangkatan(*, id_kereta(*)), id_data_penumpang(*), id_pembayaran(*)"
    )
    .ilike("email", cookieEmail!);
  return history;
}

export async function getCurrentOrder() {
  const { data: history } = await supabase
    .from("pemesanan")
    .select(
      "*, id_status(*), id_jadwal_keberangkatan(*, id_kereta(*)), id_data_penumpang(*), id_pembayaran(*)"
    )
    .order("created_at", { ascending: false })
    .limit(1);
  return history;
}

export async function getOrderDetail(orderId: string) {
  const { data: history } = await supabase
    .from("pemesanan")
    .select(
      "*, id_status(*), id_jadwal_keberangkatan(*, id_kereta(*)), id_data_penumpang(*), id_pembayaran(*)"
    )
    .eq("id_pemesanan", orderId);
  return history;
}
