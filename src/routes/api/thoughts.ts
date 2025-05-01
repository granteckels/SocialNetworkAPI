import { Router } from 'express';

const router = Router();

router.get('/', (_req, _res) => {});

router.get('/:thoughtId', (_req, _res) => {});

router.post('/', (_req, _res) => {});

router.put('/:thoughtId', (_req, _res) => {});

router.delete('/:thoughtId', (_req, _res) => {});

router.post('/:thoughtId/reactions', (_req, _res) => {});

router.delete('/:thoughtId/reactions/:reactionId', (_req, _res) => {});

export default router;
