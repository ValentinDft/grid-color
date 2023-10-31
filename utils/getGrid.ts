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

export const setSomeData = async () => {
  const { data, error } = await supabase
    .from('grid')
    .insert([
      { id_grid: 21, color: 'orange' },
      { id_grid: 22, color: 'orange' },
      { id_grid: 23, color: 'orange' },
      { id_grid: 24, color: 'orange' },
      { id_grid: 25, color: 'orange' },
      { id_grid: 26, color: 'orange' },
      { id_grid: 27, color: 'orange' },
      { id_grid: 28, color: 'orange' },
      { id_grid: 29, color: 'orange' },
      { id_grid: 30, color: 'orange' },
      { id_grid: 31, color: 'orange' },
      { id_grid: 32, color: 'green' },
      { id_grid: 33, color: 'green' },
      { id_grid: 34, color: 'green' },
      { id_grid: 35, color: 'green' },
      { id_grid: 36, color: 'green' },
    ])
    .select();
};
