<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

#[Table(['categorias'])]
#[Hidden(['created_at', 'updated_at', 'deleted_at'])]
class Categoria extends Model
{
  protected $fillable = ['name', 'description', 'user_id'];

}
