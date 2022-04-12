<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class phonebook_column extends Model
{
    use HasFactory;

       public function vaalue()
    {
        return $this->hasMany(phonebook_contact_value::class, 'foreign_key'); 
    }


}
