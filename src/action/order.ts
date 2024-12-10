import supabase from "@/utils/supabase";

export async function insertOrder({
  scheduleId,
  passangerId,
}: {
  scheduleId: string;
  passangerId: string;
}) {
  const { error } = await supabase
    .from("pemesanan")
    .insert({
      id_status: "9420e0c8-3dad-4364-b01f-a447b946c580",
      id_jadwal_keberangkatan: scheduleId,
      id_data_penumpang: passangerId,
    });

  return error;
}
