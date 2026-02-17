import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                'patient-education': resolve(__dirname, 'patient-education.html'), // Key name can be anything unique
                'symptom-checker': resolve(__dirname, 'symptom-checker.html'),
                'ibd-care': resolve(__dirname, 'ibd-care.html'),
            },
        },
    },
});
