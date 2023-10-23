import supabase from './database';

export const checkUserLog = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};
