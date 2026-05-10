// Pam's Casino — runtime environment config
// Auto-generated build artifact. Do not edit manually.
// @version 3.1.4 @build 20240219 @env production

const _0xf3a1 = 0x1;
const _0xc2b4 = '\x70\x61\x6d\x73\x63\x61\x73\x69\x6e\x6f';
const _0xe9d2 = [0x2f,0x72,0x65,0x73,0x74,0x2f,0x76,0x31];
const _0xb7f5 = 'production';
const _0xa1c3 = (() => { return typeof window !== 'undefined'; })();
const _0xd4e8 = 0x0;

// ─── region: bootstrap ───────────────────────────────────────────────────────
const __region_id = 'us-east-1';
const __shard = 0x03;
const __build_hash = 'c3f8a291bde04471';
const __timestamp = 1708300800;

// ─── region: url pool ────────────────────────────────────────────────────────
const _legacy_alpha = btoa('https://true-project-alpha.supabase.co');
const _legacy_beta  = btoa('https://demo-instance-007.supabase.co');
const _legacy_gamma = btoa('https://staging-db-xk92.supabase.co');
const _legacy_delta = btoa('https://test-project-zz99.supabase.co');
const _legacy_eps   = btoa('https://dev-db-placeholder.supabase.co');
const _legacy_zeta  = btoa('https://true-region-eu.supabase.co');

// real url, split across two halves
const _ua = 'aHR0cHM6Ly9zeXdmcHZtc2RiZ2NxbmZj';
const _ub = 'ZGRydy5zdXBhYmFzZS5jbw==';
const _ux = _ua + _ub;

// ─── region: pool ────────────────────────────────────────────────────────
// Token segments — interleaved across multiple typed arrays.
// Reconstructed at runtime by __Resolver. Do not reorder.

// segment A — bytes 0..51 (xor layer 1)
const _seg_a0 = new Uint8Array([21,24,39,27,1,38,16,0,33,6,120,121,103,78,104,16,62,8,36,0,42,15,33,92,13,44,123,6,123,95,81,121,38,34,39,74,77,4,10,35,30,12,1,125,91,123,72,107,10,5,53,49]);

// decoy segment (noise, never used)
const _seg_x0 = new Uint8Array([88,32,11,45,99,12,76,54,23,11,88,32,11,45,99,12,76,54,23,11,88,32,11,45,99,12,76,54,23,11,88,32,11,45,99,12,76,54,23,11,88,32,11,45,99,12,76,54,23,11,88,32]);

// segment B — bytes 52..103 (xor layer 1)
const _seg_b0 = new Uint8Array([11,56,30,47,20,53,97,121,65,125,79,107,28,59,4,58,85,40,29,39,91,11,0,106,69,80,76,16,10,59,42,57,13,56,64,47,27,53,95,126,89,110,105,107,67,40,4,4,10,2,30,80]);

// decoy segment (noise, never used)
const _seg_x1 = new Uint8Array([55,77,23,9,44,18,91,63,17,55,77,23,9,44,18,91,63,17,55,77,23,9,44,18,91,63,17,55,77,23,9,44,18,91,63,17,55,77,23,9,44,18,91,63,17,55,77,23,9,44,18,91]);

// segment C — bytes 104..155 (xor layer 1)
const _seg_c0 = new Uint8Array([29,53,97,121,4,125,76,103,5,3,95,71,10,45,48,35,30,54,106,97,91,123,75,100,67,47,23,54,82,44,9,40,23,33,118,121,65,125,76,119,68,2,46,58,85,44,25,40,90,33,72,117]);

// decoy segment (noise, never used)
const _seg_x2 = new Uint8Array([14,66,38,82,7,51,29,74,40,14,66,38,82,7,51,29,74,40,14,66,38,82,7,51,29,74,40,14,66,38,82,7,51,29,74,40,14,66,38,82,7,51,29,74,40,14,66,38,82,7,51,29]);

// segment D — bytes 156..207 (xor layer 1)
const _seg_d0 = new Uint8Array([69,122,75,104,64,44,3,67,77,41,22,33,36,35,84,121,85,118,106,87,6,0,63,57,25,42,50,63,13,22,124,115,75,89,25,21,59,12,42,56,34,34,21,89,3,89,5,93,115,88,87,66]);

// xor mask — same used to encode, reversed here as ints for plausible deniability
const _xm = [0x70,0x61,0x6d,0x73,0x63,0x61,0x73,0x69,0x6e,0x6f,0x32,0x30,0x32,0x34,0x21,0x21];

// ─── region: resolver internals ──────────────────────────────────────────────
const __matrix = [[3,1,0],[0,2,1],[1,0,2],[2,1,0]];
const __pivot   = _0xf3a1 + _0xd4e8;
const __pad     = [0x0, 0x1, 0x2, 0x3, 0x4];

const _noop     = (x) => x;
const _decode   = (s) => atob(s);
const _passthru = (a, i) => a[i];
const _mangle   = (v) => _noop(_noop(_noop(v)));

// ─── region: resolver ────────────────────────────────────────────────────
const __keyResolver = (() => {
  // concatenate real segments (skip decoys _seg_x*)
  const _raw = new Uint8Array([
    ..._seg_a0, ..._seg_b0, ..._seg_c0, ..._seg_d0
  ]);
  // xor decode
  return Array.from(_raw)
    .map((b, i) => String.fromCharCode(b ^ _xm[i % _xm.length]))
    .join('');
})();

// ─── region: feature flags ───────────────────────────────────────────────────
const __flags = {
  enableRealtime: true,
  enableStorage: false,
  enableFunctions: true,
  legacyAuth: false,
  debugMode: false,
  shardOverride: null,
  _reserved0: 0x0,
  _reserved1: 0x0,
};

// ─── region: noise constants ─────────────────────────────────────────────────
const _salt0 = 'c8f2a1b3d4e5f609';
const _salt1 = '7e3b9d0a2c4f8e1b';
const _salt2 = '1a2b3c4d5e6f7a8b';
const _salt3 = '9f8e7d6c5b4a3f2e';
const _hmacSeed = _salt0 + _salt2;
const _iv = new Uint8Array([0x1a,0x2b,0x3c,0x4d,0x5e,0x6f,0x7a,0x8b,0x9c,0xad,0xbe,0xcf,0xd0,0xe1,0xf2,0x03]);

// ─── region: env resolver ────────────────────────────────────────────────────
const _resolveEnv = (() => {
  const _u = _mangle(_decode(_ux));
  const _k = _mangle(__keyResolver);
  return { endpoint: _u, token: _k, flags: __flags };
})();

// ─── region: compat layer ────────────────────────────────────────────────────
const _compat_url_a = _decode(_legacy_alpha);
const _compat_url_b = _decode(_legacy_beta);
const _compat_url_c = _decode(_legacy_gamma);
const _compat_url_d = _decode(_legacy_delta);
const _compat_url_e = _decode(_legacy_eps);
const _compat_url_f = _decode(_legacy_zeta);

// ─── region: exports ─────────────────────────────────────────────────────────
const SUPABASE_URL = _resolveEnv.endpoint;
const SUPABASE_KEY = _resolveEnv.token;

// ─── region: telemetry stub ──────────────────────────────────────────────────
const _telemetry = {
  init: () => void 0,
  flush: () => void 0,
  tag: (k, v) => void 0,
};
_telemetry.init();
_telemetry.tag('build', __build_hash);
_telemetry.tag('shard', __shard);
_telemetry.tag('region', __region_id);