<?php

namespace App\Controllers;
// use App\Libraries\Lists;
class Home extends BaseController
{
    function __construct(){
		// parent::__construct();
        // $this->lists = new Lists;
	}
    public function index(): string
    {
        // return view('welcome_message');
        
        //  Fetch list of controllers 
        
        print_r($this->router->routes);



    }
}
