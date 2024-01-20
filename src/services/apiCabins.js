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
