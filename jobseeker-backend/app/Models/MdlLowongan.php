<?php namespace App\Models;
 
use CodeIgniter\Model;
 
class LowonganModel extends Model
{
    protected $table = 'lowongan';
    protected $primaryKey = 'id';
    protected $allowedFields = ['n','product_price'];
}