(function () {
  const O2 = {};
  const N1 = {};
  const I1 = ['mask', 'flip', 'pull', 'rotate', 'spin', 'symbol'];
  const H = [
    {
      provides: function (C) {
        this.symbols = null;
        const l = C.getAttribute('data-fa-symbol');
        this.symbols = null !== l && '' !== l ? l : null;
        this.mixout && this.mixout();
        this.provides && this.provides(N1);
      },
      mixout: function () {
        this.symbols = null;
      },
      hooks: function () {
        return {
          parseNodeAttributes: function (C, c) {
            const l = c.getAttribute('data-fa-symbol');
            this.symbols = null !== l && '' !== l ? l : null;
            return C;
          },
        };
      },
    },
  ];
  const E1 = {};
  const F1 = {};
  const M1 = {
    styles: {},
    shims: [],
    hooks: {
      addPack: function (C, c) {
        this.styles[C] = u({}, this.styles[C] || {}, c);
        this.mixout();
        this.provides && this.provides(N1);
      },
      addPacks: function (C) {
        C.forEach(function (C) {
          const l = n(C, 2),
            c = l[0],
            C = l[1];
          this.styles[C] = u({}, this.styles[C] || {}, c);
        }, this);
        this.mixout();
        this.provides && this.provides(N1);
      },
      addShims: function (C) {
        this.shims.push.apply(this.shims, r(C));
        this.mixout();
        this.provides && this.provides(N1);
      },
    },
  };
  H.forEach(function (C) {
    const l = C.mixout ? C.mixout() : {};
    Object.keys(l).forEach(function (c) {
      'function' === typeof l[c] && (O2[c] = l[c]);
      'object' === z(l[c]) &&
        Object.keys(l[c]).forEach(function (C) {
          O2[c] || (O2[c] = {});
          O2[c][C] = l[c][C];
        });
    });
    C.hooks &&
      (O2.hooks = O2.hooks
        ? O2.hooks.concat(C.hooks())
        : C.hooks());
    C.provides && C.provides(N1);
  });
  const M = function (C) {
    try {
      const l = arguments.length,
        z = new Array(1 < l ? l - 1 : 0);
      for (let i = 1; i < l; i++) {
        z[i - 1] = arguments[i];
      }
      C.apply(void 0, z);
    } catch (C) {
      if (!O2.hooks.onerror) {
        throw C;
      }
    }
  };
  O2.hooks && O2.hooks.onerror && O2.hooks.onerror(C);
})();