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
  const { error } = await supabase.from("pemesanan").insert({
    id_status: "9420e0c8-3dad-4364-b01f-a447b946c580",
    id_jadwal_keberangkatan: scheduleId,
    id_data_penumpang: passangerId,
  });

  return error;
}

export async function getPaymentHistory() {
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
