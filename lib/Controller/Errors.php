<?php

declare(strict_types=1);
// SPDX-FileCopyrightText: Ladislav Gazo <gazo@seges.sk>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\TypeCell\Controller;

use Closure;

use OCA\TypeCell\Service\NoteNotFound;
use OCP\AppFramework\Http;

use OCP\AppFramework\Http\DataResponse;

trait Errors {
	protected function handleNotFound(Closure $callback): DataResponse {
		try {
			return new DataResponse($callback());
		} catch (NoteNotFound $e) {
			$message = ['message' => $e->getMessage()];
			return new DataResponse($message, Http::STATUS_NOT_FOUND);
		}
	}
}
