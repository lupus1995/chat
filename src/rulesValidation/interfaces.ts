export interface RuleValidationInterface {
  rule: boolean;
  message: string;
}

export interface RulesValidationInterface {
  lineLengthRules?: ({ string }: { string: string }) => RuleValidationInterface;
  requiredInputRules?: ({
    firstClickByInput,
  }: {
    firstClickByInput: boolean;
  }) => RuleValidationInterface;
  emailRules?: ({ string }: { string: string }) => RuleValidationInterface;
}
