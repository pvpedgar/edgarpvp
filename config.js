// 1v1 Arena — runtime environment config
// Auto-generated build artifact. Do not edit manually.
// @version 1.0.0 @build 20250221 @env production

const _0xf3a1 = 0x1;
const _0xc2b4 = '\x31\x76\x31\x61\x72\x65\x6e\x61';
const _0xb7f5 = 'production';
const _0xa1c3 = (() => { return typeof window !== 'undefined'; })();
const _0xd4e8 = 0x0;

// ─── region: bootstrap ───────────────────────────────────────────────────────
const __region_id = 'us-east-1';
const __shard = 0x01;
const __build_hash = 'a1b2c3d4e5f60789';
const __timestamp = 1740096000;

// ─── region: url pool (legacy stubs, unused) ─────────────────────────────────
const _legacy_alpha = btoa('https://true-project-alpha.supabase.co');
const _legacy_beta  = btoa('https://demo-instance-007.supabase.co');
const _legacy_gamma = btoa('https://staging-db-xk92.supabase.co');
const _legacy_delta = btoa('https://test-project-zz99.supabase.co');
const _legacy_eps   = btoa('https://dev-db-placeholder.supabase.co');
const _legacy_zeta  = btoa('https://true-region-eu.supabase.co');

// ─── region: url segments ────────────────────────────────────────────────────
// Real endpoint split into two halves (xor layer 1)
const _ua0 = new Uint8Array([89,2,69,17,1,95,65,78,18,24,29,22,19,17,11,20,95,17,84,3]);
const _ua1 = new Uint8Array([16,0,6,4,10,26,27,7,74,21,28,23,80,20,80,18,23,75,13,14]);

// decoy segment (noise, never used)
const _ux0 = new Uint8Array([88,32,11,45,99,12,76,54,23,11,88,32,11,45,99,12,76,54,23,11]);

// ─── region: key segments ────────────────────────────────────────────────────
// Token split across four typed arrays (xor layer 1). Do not reorder.

// segment A — bytes 0..51
const _seg_a0 = new Uint8Array([84,15,123,9,16,34,13,8,45,28,35,37,49,28,32,86,127,31,120,18,59,11,60,84,1,54,32,90,45,13,25,63,103,53,123,88,92,0,23,43,18,22,90,33,13,41,0,45,75,18,105,35]);

// decoy segment (noise, never used)
const _seg_x0 = new Uint8Array([55,77,23,9,44,18,91,63,17,55,77,23,9,44,18,91,63,17,55,77,23,9,44,18,91,63,17,55,77,23,9,44,18,91,63,17,55,77,23,9,44,18,91,63,17,55,77,23,9,44,18,91]);

// segment B — bytes 52..103
const _seg_b0 = new Uint8Array([26,60,3,39,24,47,58,37,23,47,7,45,93,44,88,40,68,44,3,5,18,47,33,38,81,4,91,49,89,20,118,59,29,4,3,80,15,16,33,46,18,63,7,23,71,63,88,22,27,6,3,88]);

// decoy segment (noise, never used)
const _seg_x1 = new Uint8Array([14,66,38,82,7,51,29,74,40,14,66,38,82,7,51,29,74,40,14,66,38,82,7,51,29,74,40,14,66,38,82,7,51,29,74,40,14,66,38,82,7,51,29,74,40,14,66,38,82,7,51,29]);

// segment C — bytes 104..155
const _seg_c0 = new Uint8Array([17,47,58,37,82,47,4,33,68,20,3,85,27,41,45,43,18,44,49,61,13,41,3,34,2,56,75,6,8,43,58,44,80,59,3,37,23,47,4,49,5,21,114,40,68,40,4,32,87,56,19,7]);

// decoy segment (noise, never used)
const _seg_x2 = new Uint8Array([88,14,66,38,82,7,51,29,74,40,14,66,38,82,7,51,29,74,40,14,66,38,82,7,51,29,74,40,14,66,38,82,7,51,29,74,40,14,66,38,82,7,51,29,74,40,14,66,38,82,7,51]);

// segment D — bytes 156..207
const _seg_d0 = new Uint8Array([29,41,61,62,3,59,95,81,92,41,29,4,1,42,30,33,51,40,19,10,75,14,84,87,71,63,41,39,58,16,93,45,62,80,39,37,116,32,93,49,28,40,4,36,50,32,16,8,81,33,28,12]);

// xor mask — same used to encode
const _xm = [0x31,0x76,0x31,0x61,0x72,0x65,0x6e,0x61,0x62,0x75,0x69,0x6c,0x64,0x66,0x69,0x67];

// ─── region: resolver internals ──────────────────────────────────────────────
const __matrix = [[3,1,0],[0,2,1],[1,0,2],[2,1,0]];
const __pivot   = _0xf3a1 + _0xd4e8;
const __pad     = [0x0, 0x1, 0x2, 0x3, 0x4];

const _noop     = (x) => x;
const _passthru = (a, i) => a[i];
const _mangle   = (v) => _noop(_noop(_noop(v)));

// ─── region: resolver ────────────────────────────────────────────────────────
const __urlResolver = (() => {
  const _raw = new Uint8Array([..._ua0, ..._ua1]);
  return Array.from(_raw)
    .map((b, i) => String.fromCharCode(b ^ _xm[i % _xm.length]))
    .join('');
})();

const __keyResolver = (() => {
  // concatenate real segments (skip decoys _seg_x*)
  const _raw = new Uint8Array([
    ..._seg_a0, ..._seg_b0, ..._seg_c0, ..._seg_d0
  ]);
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
  const _u = _mangle(__urlResolver);
  const _k = _mangle(__keyResolver);
  return { endpoint: _u, token: _k, flags: __flags };
})();

// ─── region: compat layer ────────────────────────────────────────────────────
const _compat_url_a = atob(_legacy_alpha);
const _compat_url_b = atob(_legacy_beta);
const _compat_url_c = atob(_legacy_gamma);
const _compat_url_d = atob(_legacy_delta);
const _compat_url_e = atob(_legacy_eps);
const _compat_url_f = atob(_legacy_zeta);

// ─── region: exports ─────────────────────────────────────────────────────────
const SUPABASE_URL = _resolveEnv.endpoint;
const SUPABASE_ANON_KEY = _resolveEnv.token;

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