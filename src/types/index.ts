/**
 * OmniPage Types and Data Contracts
 */

export interface PhaseData {
  title: string;
  step: string;
  desc: string;
  cmd: string;
  output: string;
  file: string;
}

export interface AgentData {
  title: string;
  desc: string;
  format: string;
  path: string;
  invocation: string;
  cmd: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface DomainProfile {
  id: string;
  name: string;
  flag: string;
  tag: string;
  description: string;
  invariants: string[];
}
