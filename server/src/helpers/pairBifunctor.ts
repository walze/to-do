import {Bifunctor2} from 'fp-ts/lib/Bifunctor';

export const URI = 'Pair';

export type URI = typeof URI

type Pair<E, A> = [E, A]

declare module 'fp-ts/lib/HKT' {
  interface URItoKind2<E, A> {
    readonly Pair: Pair<E, A>
  }
}

class PairBifunctor implements Bifunctor2<URI> {
  URI: 'Pair' = URI;

  bimap = PairBifunctor.bimap
  mapLeft = PairBifunctor.mapLeft
  mapRight = PairBifunctor.mapRight

  static mapLeft: <E, A, G>(
    fea: Pair<E, A>,
    f: (e: E) => G
  ) => Pair<G, A> = ([e, a], f) => [f(e), a];

  static mapRight: <E, A, B>(
    fea: Pair<E, A>,
    g: (a: A) => B
  ) => Pair<E, B> = ([e, a], g) => [e, g(a)];

  static bimap: <E, A, G, B>(
    fea: Pair<E, A>,
    f: (e: E) => G,
    g: (a: A) => B
  ) => Pair<G, B> = (fea, f, g) => {
    const {mapLeft, mapRight} = PairBifunctor;

    return mapRight(mapLeft(fea, f), g);
  };
}

export const {
  bimap,
  mapLeft,
  mapRight,
} = new PairBifunctor();
