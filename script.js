// ============================================================
// SECCIÓN DE CONFIGURACIÓN: ENLACES DE GOOGLE DRIVE
// ============================================================
// Estructura: driveLinks[grado][tomo][seccion][idCurso] = "URL"
// grados: "1ro", "2do", "3ro", "4to", "5to"
// tomos: "tomo-i", "tomo-ii", "tomo-iii", "tomo-iv", "tomo-v", "tomo-vi", "tomo-vii", "tomo-viii"
// secciones: "cap1", "cap2", "cap3", "retro" (los números de capítulos se ajustan según tomo)
// idCurso: del 1 al 20 (ver lista de cursos más abajo)
//
// INSTRUCCIONES: Reemplaza las URL de ejemplo con tus enlaces reales de Drive.
// Puedes copiar y pegar tantas líneas como necesites.
// ============================================================

const driveLinks = {
    
    // ========== 5TO PRE ==========
    "5topre": {
        "tomo-i": {
            "cap1": {
                1: "https://docs.google.com/presentation/d/1LUcNI5r15BcXMKvqFAAZfPI09xZYx56S/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1-lR1L6Pih7R4qHXK8CMgIH0oG7J_JnBy/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/16eiEQI1VLyql6anbvSJO1a1a30PnaAYy/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1zeK5zbzI4PXqXAM7evDObgHE84BfL8zK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1WOSibry1EPiFg_aOJmOqgkL6TDjBVlv2/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1Wf0r4rIJXtJlRYiAZ_VT7uY2QW0MXgNx/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/16UK1h_tG8OxnoElnFEcETlgcDjEseA75/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1duUPwcPIvK3pcUfVmNAaVoOkXfy4R-G7/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1onkm68VOe5613tPX0qUt5v00kkhxN2_m/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1Sv4BpY6TIml13_9fNZssmS1pSur1LYzI/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1Ngd6HYSjBkBeabgTA_eYvK1Zbk8FVRBh/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1bC0k3YL0k6CzH8dRWjw9Bes1-yufwvWe/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1PqWDaTq-9TJ0JJqRnNZld_9ccooYbrjd/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1zUJvIq8MqLbnWtpF7t5zJMiex3HWa3br/edit?usp=drive_link&ouid=108008430419016708844&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/10I0Jlomz-BGtpoUGWwXVPQnoMe95tSk5/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1ktExMatHsxeOhb4S4zMMRlzXYxItEWE3/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap2": {
                1: "https://docs.google.com/presentation/d/1hO6MvSypuVa3JWzko8NRGcMtVp3BuauO/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1GaXq6rQxMbHPEti5c5G59y3uHQmsHq2A/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1oOtHm-jIiNNlcIRcFL919jVqhgw6w-qB/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1iMJHF0Uozdkv2Uw67YhVizaPQ9r49Vlu/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1cLhwWFmAHgQ-YT_7N-MHPYdCesa6n2tx/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/15BhutspAfhF2_MX6Bh7wi1ar0ZSudg4S/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1y-BKk2WigQnvLt0MP-8I4rhzNGudZYmh/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1Hx1iOXUCpgM4TVkdMXlQyY9bELagSL5E/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/16eT9k596psQlJlNUA0_tn4y6RI2KKiBG/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1kYc1WIG3ANX26ftDi9yN7TKmeXu858ik/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1PAl0ymJsbhpRpJ5a9TMO5lHVj2pb-eKK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1-YuJkcEV8iq2n4GN32x5_i2EEnigXT9d/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1feY5pgpTXMddd71hZRmeOQsD5Wd4uk7A/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1Q3H2WogUuKTdn-x2xKl18DsiaYA2GxKT/edit?usp=drive_link&ouid=108008430419016708844&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/12hGY_xdhAtmQhZSaibWB1OOZGB51Sngr/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1NzZlN6m6rP9Twp_jfn9_3CZhotzb3pye/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap3": {
                1: "https://docs.google.com/presentation/d/122W4-cWY5NvfhZ2_bx1X8CYNG5dMDiOD/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1_QLtp886U736BF_mmRSBGIbJ3CXTKaVs/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1aqIBqoQTX8u9RJLu7JVFnM6gDWUYW0VP/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1z0Fy_s_GZaqIyv4mUGlwb2GUOL4oq_RC/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1n8t4DyvDih6CN_qZZFzoAJOw6D4Z0x51/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/19xtduZjHXG17DuY9ZtarS6YgHbNsQuNo/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1xAwrkum5pKLewNZMSetW4f_YcwzPJnrK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1UPF3OJxhK0i3zsmo0TeVdqDjwLf8PxCi/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1LjRn6WSS5WRA_nrUMCbOpPQImdXEsnEz/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1_r39MXS-daYILXHPoH3Xcb-Hwotp6khv/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1Ng0osTfrRvzBVeiYyhU9-mVFV67myMhX/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/16V5ujofyc8MQcwN6KiCScYVP5IDnZgCI/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1TCAZ4yMqKow8WHCTN4ILlxZoYspGhBzR/edit?usp=drive_link&ouid=108008430419016708844&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1ysNrAkex1_Ja8k1ChoIkgodZ2aKPtbGT/edit?usp=drive_link&ouid=108008430419016708844&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1vu-ZLxBL9tw7XnABvBYXg4oRdsk298Gw/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1i3OKRTSZlrzcVYV92EAJKohBir7qeNXr/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "retro": {
                1: "https://docs.google.com/presentation/d/19XKkIrNYx48WCoU3gtCLN17u1hcydMUT/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1ylaBoBOCdh5em4AjLWhGQWdNnNdc8ddV/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1oNACas2ZGjlEHlaXOq6P_6vmUYW0gRWT/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1EdNthlBP6LmoLEE6UwnG0Q1XkCMERsku/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1NJesCOIfJL2LJBsKKBus4nW1haXsE9J4/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1n5KHPp4n42-a4V0_tIGwVp45tr-9iY23/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1w_EgPpjd6dy75nZ7iKw_8VktCjoDMu8w/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1BOMlck6ef6_UOu_PMz46_mX-pbZYbOVk/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1VS9DaLb-pNavWLwZZPfoyHS8xR5nnVtI/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1fxWEuIMUNnxcObAvtmme2j_s-RVjnTlV/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1TarpH7l6WCy-sFZcRZioEDsM0Yuu2XGZ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1TfZqhB70cCZBEwBP1q70vrDvnEm8jiYs/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1EG2AtgGMq0PTeS96DK2A5CsldoUtjZqr/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1_iTPKBRAzQXcnmXpI6iIqRhlUhafKn-D/edit?usp=drive_link&ouid=108008430419016708844&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1tpm6d43p7tP0_zS0X7Uit8POJToFxnEn/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1qvs_4dJpa1XIIaD5oIjVDrW2I3mm1FAT/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            }
        },
        "tomo-ii": {
            "cap4": {
                1: "https://docs.google.com/presentation/d/187LYCsSG-vPq21T7Gsmbqkh9FkgxpqQh/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1U90KjS6iHRuA2GaCfio_rDLkNXoEh_PM/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1wZR8ip3V-Kk2J48ePMflW6_1Th5nfqBR/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/17i0BcdqsV3s_HPOUNHYPIxDlahpNO2mH/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1wVtB_xonkviif1EghNQ4Xc2P_3AbKzD6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1sszf1WTEruM0gepcfCMIeb5Ft0aMdNIq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1KjmWtVomONhi4TCFBtTOxBKV2azz6TQl/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1_cN2UN0JK49btfMixj2BeTMt8-xcVSk5/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1_gnb0fWsWhlhQ1vrQvA9slPjWQHNPqNb/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/11mEi_tsvwmPvafyBBl0wPlZkMYr5Y6w8/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1TMzLgCYQ2hq5ql5gNuI79nfdrbutvoxP/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1CpM2nbPIgB9zjWqKj9Yw8XH8LxCDP1mg/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1AjRh3EkiugHDH8064sGZvXjfIzj-UIgn/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1VC9nY0SGnk_EUfBIh6bLdYBzVR9f10I6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1S41zKOA0z9doHy78h2w3atsd1CML0HRK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1kMtBc_KHwDOafzPcrVTjiBEkl9oYZrvq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap5": {
                1: "https://docs.google.com/presentation/d/1qSQPO3ezenDgKzNqgvD_6fEx4_yG5xW5/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                3: "https://docs.google.com/presentation/d/1TLYJqQGWGLaXDbk25yHHF6G_ZgEUbPa8/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1fja40jgAtSnjI5v8jWBfjT0nqtVXPjn5/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/19LCRO4-df1lFJCTM7eQQtYA0X3EvubTl/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1KVY1sGsEsXW1nALSgHzNUw6UM9BjKaQk/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1vd3EXJAzFIhk-T0JXPcoPMW57fMi3DP-/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/12YehnGfRXXrubX5xqN4NDZ6HGDZ4qe1M/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1MHMkf1cOvkkyhZTvhTnSjKezcvBDBrLs/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/10fhV7hcC96CAhYd3sZ8GtQhAE55pf9_N/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1SlYylmWJwunSSv7tnpFs7gIFgFvfYdOc/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/14gZctrx2G9OxOo0yKP5O8H_BbkQbeWHq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1VlaKj-qyiMKn1ThutFsacxM_2I6CDubI/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1F7lWkXm3C65SnIJuslWcBo0FnxA8FHk1/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1ZXBfPNE08U5Cp6QBxFE845LatcFNTto8/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1ym4owyuxeGkhoTeMpbdeSEpoUXqx3EjO/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap6": {
                1: "https://docs.google.com/presentation/d/1y3SVb_AGGfpP0mNeTMBmHBCJhsVldUyq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                3: "https://docs.google.com/presentation/d/1koxVAf7LaNEcS4oqhfjyQlSHOQ97N7kv/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1XsgcYgYWmTRn2-1i8mdv0hzVN3KqehR2/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1MQZ97aFqa9-JOpfQ_2xuPagXw_gJyMrn/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1obF81A9ZjRUFFbMs4Odlo6gJ87K1vlX1/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1Id6HUHhk_5YP8iKNZXioFgjwKYLmdqkg/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1ZzIb0219f1XopQAWntIzGyUUkhNRhq1i/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/17CX4UwrhOi-sgNDJ-qgTgz51NIcghMXB/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/181sLj3l6ow4p_cuwnxp4uvcwO07gsofI/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1-JOWFtyLaUPK5y0laHUkYM8kGxEUvRuN/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1g4cnLaB-_xJnnSsRa1adz6cC89zVAQBc/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1DrG-EORqHVNMLLLowURBnDL2-tbkks9E/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1AENKMs_KIfGbS832r7PoHV6cH-ZdcyBl/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1WWu6Pwa2_8kYyOMUduC3fx-r--yN5BQW/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1z3fmIkHh3cN2Rd4mU8GXPW5JUy6Fgwm9/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "retro": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
                }
            },
        "tomo-iii": {
            "cap7": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap8": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap9": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "retro": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            }
        },
        "tomo-iv": {
            "cap10": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap11": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap12": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "retro": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
                }
            },
        "tomo-v": {
            "cap13": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap14": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap15": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "retro": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
                }
            },
        "tomo-vi": {
            "cap16": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap17": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap18": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "retro": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
                }
            },
        "tomo-vii": {
            "cap19": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap20": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap21": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "retro": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
                }
            },
        "tomo-viii": {
            "cap22": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap23": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap24": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "retro": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            }
        }
    }
};

// ============================================================
// FIN DE LA SECCIÓN DE CONFIGURACIÓN
// ============================================================

// Lista de cursos (20 asignaturas) con área y descripción
const courses = [

    // Ciencias Sociales
    { id: 1, name: "Economía", description: "Sistemas económicos, oferta y demanda, mercado y finanzas.", icon: "fas fa-chart-line", color: "#2d6a4f", area: "sociales", availableGrades: ["5topre"]},
    { id: 2, name: "Geografía", description: "Relieve, clima, recursos naturales y cartografía.", icon: "fas fa-globe-americas", color: "#40916c", area: "sociales", availableGrades: ["5topre"]},
    { id: 3, name: "Historia del Perú", description: "Culturas preincas, imperio inca, conquista y república.", icon: "fas fa-landmark", color: "#dda15e", area: "sociales" , availableGrades: ["5topre"]},
    { id: 4, name: "Historia Universal", description: "Edades históricas, guerras mundiales y civilizaciones antiguas.", icon: "fas fa-monument", color: "#bc6c25", area: "sociales", availableGrades: ["5topre"] },
    { id: 5, name: "Psicología", description: "Procesos mentales, emociones, desarrollo humano y conducta.", icon: "fas fa-brain", color: "#ff006e", area: "sociales", availableGrades: ["5topre"]},
    // Comunicación
    { id: 8, name: "Lenguaje", description: "Gramática, comunicación, comprensión lectora y redacción.", icon: "fas fa-spell-check", color: "#3a86ff", area: "comunicacion", availableGrades: ["5topre"] },
    { id: 9, name: "Literatura", description: "Géneros literarios, autores, obras y análisis textual.", icon: "fas fa-book-open", color: "#8338ec", area: "comunicacion", availableGrades: ["5topre"] },
    { id: 10, name: "Razonamiento Verbal", description: "Sinónimos, antónimos, analogías verbales y comprensión.", icon: "fas fa-comment-alt", color: "#588157", area: "comunicacion" , availableGrades: ["5topre"]},
    // Ciencia y Tecnología
    { id: 13, name: "Biología", description: "Células, seres vivos, ecosistemas y anatomía humana.", icon: "fas fa-dna", color: "#2a9d8f", area: "ciencia", availableGrades: ["5topre"] },
    { id: 14, name: "Física", description: "Movimiento, fuerzas, energía, ondas y electricidad.", icon: "fas fa-atom", color: "#9d4edd", area: "ciencia", availableGrades: ["5topre"] },
    { id: 15, name: "Química", description: "Elementos, compuestos, reacciones y tabla periódica.", icon: "fas fa-flask", color: "#fb5607", area: "ciencia", availableGrades: ["5topre"] },
    // Matemática
    { id: 16, name: "Álgebra", description: "Expresiones algebraicas, ecuaciones, funciones y polinomios.", icon: "fas fa-square-root-alt", color: "#e63946", area: "matematica", availableGrades: ["5topre"] },
    { id: 17, name: "Aritmética", description: "Números, operaciones básicas, fracciones, decimales y más.", icon: "fas fa-calculator", color: "#0a4d8c", area: "matematica", availableGrades: ["5topre"] },
    { id: 18, name: "Geometría", description: "Figuras geométricas, medición, propiedades y transformaciones.", icon: "fas fa-draw-polygon", color: "#3a86ff", area: "matematica", availableGrades: ["5topre"] },
    { id: 19, name: "Razonamiento Matemático", description: "Problemas lógicos, secuencias, analogías y patrones.", icon: "fas fa-puzzle-piece", color: "#3d405b", area: "matematica", availableGrades: ["5topre"] },
    { id: 20, name: "Trigonometría", description: "Triángulos, funciones trigonométricas, identidades y aplicaciones.", icon: "fas fa-shapes", color: "#1d3557", area: "matematica", availableGrades: ["5topre"] }
];

// Colores por área (para el borde)
const areaColors = {
    sociales: "#e9c46a",
    comunicacion: "#f4a261",
    ciencia: "#2a9d8f",
    matematica: "#e76f51"
};

// Nombres de áreas para mostrar en badge
const areaNames = {
    sociales: "Ciencias Sociales",
    comunicacion: "Comunicación",
    ciencia: "Ciencia y Tecnología",
    matematica: "Matemática"
};

// Grados (1ro a 5to)
const grades = [
    { id: "5topre", name: "5to Pre", icon: "fas fa-star" }
];

// Tomos I al VIII
const tomos = [
    { id: "tomo-i", name: "Tomo I", icon: "fas fa-book" },
    { id: "tomo-ii", name: "Tomo II", icon: "fas fa-book" },
    { id: "tomo-iii", name: "Tomo III", icon: "fas fa-book" },
    { id: "tomo-iv", name: "Tomo IV", icon: "fas fa-book" },
    { id: "tomo-v", name: "Tomo V", icon: "fas fa-book" },
    { id: "tomo-vi", name: "Tomo VI", icon: "fas fa-book" },
    { id: "tomo-vii", name: "Tomo VII", icon: "fas fa-book" },
    { id: "tomo-viii", name: "Tomo VIII", icon: "fas fa-book" }
];

// Generar las secciones (capítulos + RETRO) para cada tomo
const sectionsByTomo = {};
tomos.forEach((tomo, index) => {
    const startChapter = index * 3 + 1; // 1,4,7,10,13,16,19,22
    const sections = [
        { id: `cap${startChapter}`, name: `Capítulo ${startChapter}` },
        { id: `cap${startChapter+1}`, name: `Capítulo ${startChapter+1}` },
        { id: `cap${startChapter+2}`, name: `Capítulo ${startChapter+2}` },
        { id: "retro", name: "RETRO" }
    ];
    sectionsByTomo[tomo.id] = sections;
});

// Estado actual
let currentGrade = null;
let currentTomo = null;
let currentSection = null;

// Elementos DOM
const gradeButtonsContainer = document.getElementById('grade-buttons');
const tomoSelectorDiv = document.getElementById('tomo-selector');
const tomoButtonsContainer = document.getElementById('tomo-buttons');
const sectionSelectorDiv = document.getElementById('section-selector');
const sectionButtonsContainer = document.getElementById('section-buttons');
const coursesContainer = document.getElementById('courses-container');
const currentSelectorSpan = document.getElementById('current-selector');
const coursesCountSpan = document.getElementById('courses-count');

// Función para generar botones de grados
function generateGradeButtons() {
    gradeButtonsContainer.innerHTML = '';
    grades.forEach(grade => {
        const btn = document.createElement('button');
        btn.className = `selector-btn grade-btn ${currentGrade === grade.id ? 'active' : ''}`;
        btn.dataset.id = grade.id;
        btn.innerHTML = `<i class="${grade.icon}"></i><span>${grade.name}</span>`;
        btn.addEventListener('click', () => {
            currentGrade = grade.id;
            currentTomo = null;
            currentSection = null;
            generateGradeButtons();
            tomoSelectorDiv.style.display = 'block';
            sectionSelectorDiv.style.display = 'none';
            generateTomoButtons();
            updateCurrentSelector();
            renderCourses();
        });
        gradeButtonsContainer.appendChild(btn);
    });
}

// Función para generar botones de Tomos según el grado actual
function generateTomoButtons() {
    tomoButtonsContainer.innerHTML = '';
    if (!currentGrade) return;
    tomos.forEach(tomo => {
        const btn = document.createElement('button');
        btn.className = `selector-btn tomo-btn ${currentTomo === tomo.id ? 'active' : ''}`;
        btn.dataset.id = tomo.id;
        btn.innerHTML = `<i class="${tomo.icon}"></i><span>${tomo.name}</span>`;
        btn.addEventListener('click', () => {
            currentTomo = tomo.id;
            currentSection = sectionsByTomo[currentTomo][0].id;
            generateTomoButtons();
            generateSectionButtons();
            updateCurrentSelector();
            renderCourses();
            sectionSelectorDiv.style.display = 'block';
        });
        tomoButtonsContainer.appendChild(btn);
    });
}

// Función para generar botones de secciones según el tomo actual
function generateSectionButtons() {
    sectionButtonsContainer.innerHTML = '';
    if (!currentGrade || !currentTomo) return;
    const sections = sectionsByTomo[currentTomo];
    sections.forEach(section => {
        const btn = document.createElement('button');
        btn.className = `selector-btn section-btn ${currentSection === section.id ? 'active' : ''}`;
        btn.dataset.id = section.id;
        btn.innerHTML = `<i class="fas fa-chapter"></i><span>${section.name}</span>`;
        btn.addEventListener('click', () => {
            currentSection = section.id;
            generateSectionButtons();
            updateCurrentSelector();
            renderCourses();
        });
        sectionButtonsContainer.appendChild(btn);
    });
}

// Actualizar el texto del selector actual
function updateCurrentSelector() {
    if (!currentGrade) {
        currentSelectorSpan.innerHTML = `<i class="fas fa-graduation-cap"></i><span>Selecciona un grado para comenzar</span>`;
        return;
    }
    let text = `${grades.find(g => g.id === currentGrade).name}`;
    if (currentTomo) {
        text += ` - ${tomos.find(t => t.id === currentTomo).name}`;
        if (currentSection) {
            const sectionName = sectionsByTomo[currentTomo].find(s => s.id === currentSection).name;
            text += ` - ${sectionName}`;
        }
    }
    currentSelectorSpan.innerHTML = `<i class="fas fa-graduation-cap"></i><span>${text}</span>`;
}

// Renderizar tarjetas de cursos con borde por área
function renderCourses() {
    coursesContainer.innerHTML = '';
    if (!currentGrade || !currentTomo || !currentSection) {
        coursesContainer.innerHTML = '<p style="text-align:center; grid-column:1/-1;">Selecciona un grado, tomo y sección para ver los materiales.</p>';
        coursesCountSpan.textContent = '0';
        return;
    }

    const links = driveLinks[currentGrade]?.[currentTomo]?.[currentSection];
    if (!links) {
        coursesContainer.innerHTML = '<p style="text-align:center; grid-column:1/-1;">No hay enlaces disponibles para esta selección.</p>';
        coursesCountSpan.textContent = '0';
        return;
    }

    console.log("🔍 Grado actual:", currentGrade);
    console.log("🔍 Enlaces disponibles (IDs):", Object.keys(links));

    // Filtrar cursos:
    // - Que tengan enlace (existan en links)
    // - Que estén permitidos para el grado actual (si tienen availableGrades)
    const availableCourses = courses.filter(course => {
        const hasLink = links[course.id] !== undefined;
        if (!hasLink) return false;

        // Si el curso tiene availableGrades, verificar que incluya el grado actual
        if (course.availableGrades) {
            const isAllowed = course.availableGrades.includes(currentGrade);
            if (!isAllowed) {
                console.log(`❌ Curso "${course.name}" (ID ${course.id}) NO permitido para ${currentGrade} (solo para: ${course.availableGrades.join(', ')})`);
            }
            return isAllowed;
        }

        // Si no tiene availableGrades, asumimos que está permitido (pero avisamos)
        console.log(`⚠️ Curso "${course.name}" (ID ${course.id}) no tiene availableGrades. Se muestra en todos los grados donde tenga enlace.`);
        return true;
    });

    console.log("✅ Cursos mostrados:", availableCourses.map(c => c.name));

    coursesCountSpan.textContent = availableCourses.length;

    availableCourses.forEach(course => {
        const link = links[course.id];
        const areaColor = areaColors[course.area];
        const areaName = areaNames[course.area];
        const card = document.createElement('div');
        card.className = 'course-card';
        card.style.borderLeftColor = areaColor;
        card.innerHTML = `
            <div class="grade-tomo-section-tag">${currentGrade} / ${currentTomo} / ${currentSection}</div>
            <div class="area-badge" style="background-color: ${areaColor};">${areaName}</div>
            <div class="course-logo">
                <i class="${course.icon}" style="color: ${course.color}"></i>
            </div>
            <div class="course-content">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <a href="${link}" target="_blank" class="drive-link">
                    <i class="fab fa-google-drive"></i> Acceder al Material
                </a>
            </div>
        `;
        coursesContainer.appendChild(card);
    });

    if (availableCourses.length === 0) {
        coursesContainer.innerHTML = '<p style="text-align:center; grid-column:1/-1;">No hay materiales disponibles para esta selección.</p>';
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    generateGradeButtons();
    tomoSelectorDiv.style.display = 'none';
    sectionSelectorDiv.style.display = 'none';
    renderCourses();
});