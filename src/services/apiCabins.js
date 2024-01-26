import supabase from "./supabaseClient";

export const getCabins = async () => {
	let { data: cabins, error } = await supabase.from("cabins").select("*");
	if (error) {
		throw new Error();
	}
	return cabins;
};
export const deleteCabins = async (id) => {
	const { data, error } = await supabase.from("cabins").delete().eq("id", id);
	if (error) {
		throw new Error("Cabin can't delete right now");
	}
	return data;
};

export const addCabins = async (newCabin) => {
	const imagePath = `https://bxdbejjcxavczeyrmpyb.supabase.co/storage/v1/object/public/cabins/${newCabin.image}`;
	const { data, error } = await supabase
		.from("cabins")
		.insert([{ ...newCabin, image: imagePath }])
		.select();
	if (error) {
		throw new Error("Cabin can't delete right now");
	}
	const { error: storageError } = await supabase.storage
		.from("cabins")
		.upload(cabinImage, newCabin.image);
	if (storageError) {
		await supabase.from("cabins").delete().eq("id", data.id);
		console.log(storageError);
		throw new error(
			"cabin images upload failed and cabin could not be created"
		);
	}
	return data;
};
