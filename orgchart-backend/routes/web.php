<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/teste', function () {
    return 'Teste OK';
});

Route::get('/orgchart', function () {
    return response()->json([
        "id" => "1",
        "name" => "CEO",
        "title" => "general manager",
        "children" => [
            ["id" => "2", "name" => "CTO", "title" => "department manager"],
        ],
    ]);
});
