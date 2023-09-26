<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->group('api', ["filter" => ["cors", "auth"]],  function($routes) {
	$routes->get('users', 'Api\ApiUser::index');
	$routes->post('users', 'Api\ApiUser::create');
	$routes->get('users/(:num)', 'Api\ApiUser::show/$1');
	$routes->patch('users/(:num)', 'Api\ApiUser::update/$1');
	$routes->delete('users/(:num)', 'Api\ApiUser::delete/$1');
});

$routes->post('/api/users/token', 'Api\AuthController::login', ['filter' => 'cors']);