<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->group('api', ["filter" => ["cors", "auth"]],  function($routes) {
	//user
	$routes->get('users', 'Api\ApiUser::index');
	$routes->get('users/(:num)', 'Api\ApiUser::show/$1');
	$routes->patch('users/(:num)', 'Api\ApiUser::update/$1');
	$routes->delete('users/(:num)', 'Api\ApiUser::delete/$1');
	$routes->get('users/page', 'Api\ApiUser::page');
	//admin
	$routes->get('admin', 'Api\ApiAdmin::index');
	$routes->post('admin', 'Api\ApiAdmin::create');
	$routes->get('admin/(:num)', 'Api\ApiAdmin::show/$1');
	$routes->patch('admin/(:num)', 'Api\ApiAdmin::update/$1');
	$routes->delete('admin/(:num)', 'Api\ApiAdmin::delete/$1');
	$routes->get('admin/page', 'Api\ApiAdmin::page');
});
$routes->post('/api/users', 'Api\ApiUser::create', ['filter' => 'cors']);


$routes->post('/api/users/token', 'Api\AuthController::login', ['filter' => 'cors']);