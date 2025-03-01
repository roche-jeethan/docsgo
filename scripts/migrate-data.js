import fs from 'fs';
import { createClient } from '@supabase/supabase-js';

import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const data = JSON.parse(fs.readFileSync('./src/data/information.json', 'utf8'));

async function migrateData() {
  for (const category of data) {
    const { data: categoryData, error: categoryError } = await supabase
      .from('categories')
      .insert({
        slug: category.slug,
        language: category.language,
        icon: category.icon,
        description: category.description
      })
      .select('id')
      .single();
    
    if (categoryError) {
      console.error('Error inserting category:', categoryError);
      continue;
    }
    if (category.tools && category.tools.length > 0) {
      const toolsWithCategoryId = category.tools.map(tool => ({
        ...tool,
        category_id: categoryData.id
      }));
      
      const { error: toolsError } = await supabase
        .from('tools')
        .insert(toolsWithCategoryId);
      
      if (toolsError) {
        console.error(`Error inserting tools for ${category.language}:`, toolsError);
      }
    }
    
    console.log(`Migrated: ${category.language} with ${category.tools?.length || 0} tools`);
  }
  
  console.log('Migration complete!');
}

migrateData().catch(console.error);