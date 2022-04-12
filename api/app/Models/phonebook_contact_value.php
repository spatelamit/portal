<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class phonebook_contact_value extends Model
{
    use HasFactory;


     public function coolumn()
    {
        return $this->belongsTo(phonebook_column::class, 'foreign_key', 'local_key'); 
    }



}
