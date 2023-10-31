import supabase from './database';

export const checkGrid = async () => {
  let { data: grid, error } = await supabase
    .from('grid')
    .select('*')
    .order('id_grid', { ascending: true });
  return grid;
};

export const updateGrid = async (id_grid: number, color: string) => {
  const { data, error } = await supabase
    .from('grid')
    .update({ color: color })
    .eq('id_grid', id_grid)
    .select();
};
