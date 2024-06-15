<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Log;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function redirect(Exception $exc = null, string $message = null, string $route = null) 
    {
        $message = $message ?? 'Unexpected error';
        if ($exc) {
            $message = $exc->getMessage();
            Log::error(self::class, [$exc->getMessage(), $exc->getTrace()]);
        }

        $redirect =  back();

        if ($route) {
            $redirect = redirect()->to($route);
        }

        return $redirect->withInput()
            ->with([
                'message' => $message
            ]);
    }
}
