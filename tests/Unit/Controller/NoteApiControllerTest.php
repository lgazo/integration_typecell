<?php

declare(strict_types=1);
// SPDX-FileCopyrightText: Ladislav Gazo <gazo@seges.sk>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\TypeCell\Tests\Unit\Controller;

use OCA\TypeCell\Controller\NoteApiController;

class NoteApiControllerTest extends NoteControllerTest {
	public function setUp(): void {
		parent::setUp();
		$this->controller = new NoteApiController($this->request, $this->service, $this->userId);
	}
}
