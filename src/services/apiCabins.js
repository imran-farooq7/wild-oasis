import supabase from "./supabaseClient";

export const getCabins = async () => {
	let { data: cabins, error } = await supabase.from("cabins").select("*");
	if (error) {
		throw new Error();
	}
	return cabins;
};
