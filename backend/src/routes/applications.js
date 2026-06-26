const express = require('express');
const router = express.Router();
const pool = require('../../db');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM applications ORDER BY created_at DESC'
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM applications WHERE id = $1', 
            [req.params.id]
        );
        if (result.rows.length == 0) {
            return res.status(404).json({ error: 'Not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});

router.post('/', async (req, res) => {
    const { company, role, status = 'Wishlist', link, notes, deadline } = req.body;
    try {
        const result = await pool.query(
            `INSERT INTO applications (company, role, status, link, notes, deadline)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *`,
            [company, role, status, link, notes, deadline]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message })
    }
});

router.patch('/:id/status', async (req, res) => {
    const { status } = req.body;
    try {
        const result = await pool.query(
            `UPDATE applications SET status= $1 WHERE id = $2 RETURNING *`,
            [status, req.params.id]
        );
        if (result.rows.length == 0) {
            return res.status(404).json({ error: 'Not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.put('/:id', async (req, res) => {
    const { company, role, status = 'Wishlist', link, notes, deadline } = req.body;
    try {
        const result = await pool.query(
            `UPDATE applications 
            SET company=$1, role=$2, status=$3, link=$4, notes=$5, deadline=$6
            WHERE id=$7
            RETURNING *`,
            [company, role, status, link, notes, deadline, req.params.id]
        );
        if (result.rows.length == 0)
            return res.status(404).json({ error: 'Not found' });
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const result = await pool.query(
            'DELETE FROM applications WHERE id=$1', [req.params.id]
        );
        if (result.rows.length == 0) {
            return res.status(404).json({ error: 'Not found' });
        }
        res.json({ message: 'Deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router;