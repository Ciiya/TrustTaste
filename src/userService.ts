// src/services/userService.js
import supabase from '../supabase/supabaseClient';

export interface User {
  id?: number;
  username: string;
  email: string;
}

export interface Allergy {
    id?: number;
    name: string;
}

export interface UserAllergy {
    user_id: number;
    allergy_id: number;
}

export const getUsers = async () =>
  await supabase.from('users').select('*');

export const getUser = async (id: number) =>
  await supabase.from('users').select('*').eq('id', id).single();

export const createUser = async (user: User) =>
  await supabase.from('users').insert([user]);

export const updateUser = async (id: number, updates: Partial<User>) =>
  await supabase.from('users').update(updates).eq('id', id);

export const deleteUser = async (id: number) =>
  await supabase.from('users').delete().eq('id', id);

