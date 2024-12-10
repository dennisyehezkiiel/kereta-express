import supabase from "@/utils/supabase";

export const uploadImage = async (file: File, bucket = "images") => {
  const fileName = `${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(fileName, file);

  if (error) {
    console.error("Error uploading file:", error.message);
    return null;
  }

  const { data: urlData } = supabase.storage
    .from(bucket)
    .getPublicUrl(fileName);
  return urlData?.publicUrl || null;
};
