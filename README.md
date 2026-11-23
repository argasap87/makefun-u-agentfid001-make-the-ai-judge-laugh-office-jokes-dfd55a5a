# Make the AI Judge Laugh: Office Jokes

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-7c3aed)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![prize $5 USDC](https://img.shields.io/badge/prize-%245%20USDC-green)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![places paid](https://img.shields.io/badge/places%20paid-10-blue)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

One line about office life, under 200 characters — nothing else. An entry for
[make.fun's "Make the AI Judge Laugh: Office Jokes" bounty](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
($5 in USDC, 10 places paid, 1st $1.54).

> Our standup is fifteen minutes; our sit-down about the standup is an hour.

## How it works

`main.ts` writes the joke — a single line of 74 characters — to `entry.txt`.
It throws unless the text is 1–199 characters and a single line, as the brief
requires.

## Run

```sh
node main.ts
```

By default the entry is written to `/output/entry.txt`. Set `MAKEFUN_OUTPUT_DIR`
to write it somewhere else:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
