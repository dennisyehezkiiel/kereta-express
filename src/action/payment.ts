import supabase from "@/utils/supabase";

export async function insertPayment({
  paymentMethod,
  paymentFile,
  status,
}: {
  paymentMethod: string;
  paymentFile: string;
  status: string;
}) {
  const { error } = await supabase.from("pembayaran").insert({
    metode_pembayaran: paymentMethod,
    tanggal_pembayaran: new Date(),
    bukti_pembayaran: paymentFile,
    id_status: status,
  });

  return error;
}

export async function getCurrentPayment() {
  const { data: posts } = await supabase
    .from("pembayaran")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);
  return posts;
}
